#!/usr/bin/env bash
#
# Regenerates the smaller renditions of each gallery photo used by the photo grid.
# The grid never shows a tile wider than ~419px, so it uses these instead of the
# full size file.  See getGridSources() in src/components/page-content/photos-content.js
#
# Usage:  npm run thumbs          regenerate anything out of date
#         npm run thumbs -- --force   rebuild everything from scratch
#
# Safe to re-run: renditions are only rebuilt when the source photo is newer, and
# renditions whose source photo no longer exists are removed.

set -euo pipefail

SRC_DIR="src/images"
OUT_DIR="src/image-thumbs"
WIDTHS=(400 800)
QUALITY=82
FORCE=0

[[ "${1:-}" == "--force" ]] && FORCE=1

for tool in cwebp dwebp; do
  command -v "$tool" >/dev/null 2>&1 || {
    echo "error: $tool not found.  Install it with:  brew install webp" >&2
    exit 1
  }
done

[[ -d "$SRC_DIR" ]] || { echo "error: $SRC_DIR not found (run from the project root)" >&2; exit 1; }

mkdir -p "$OUT_DIR"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

built=0
current=0
removed=0

shopt -s nullglob
for src in "$SRC_DIR"/*.webp; do
  stem="$(basename "$src" .webp)"
  width="$(sips -g pixelWidth "$src" 2>/dev/null | awk '/pixelWidth/{print $2}')"
  [[ -n "$width" ]] || { echo "  skip $stem (could not read dimensions)"; continue; }

  decoded=""
  for w in "${WIDTHS[@]}"; do
    out="$OUT_DIR/${stem}-${w}.webp"

    # Never upscale: a photo smaller than the tier just uses the full size file.
    if (( width <= w )); then
      [[ -f "$out" ]] && { rm -f "$out"; removed=$((removed + 1)); }
      continue
    fi

    if (( ! FORCE )) && [[ -f "$out" && "$out" -nt "$src" ]]; then
      current=$((current + 1))
      continue
    fi

    # Decode once per photo, reused for every width.
    if [[ -z "$decoded" ]]; then
      decoded="$TMP/${stem}.png"
      dwebp -quiet "$src" -o "$decoded"
    fi

    cwebp -quiet -q "$QUALITY" -sharp_yuv -resize "$w" 0 "$decoded" -o "$out"
    built=$((built + 1))
  done
done

# Drop renditions whose source photo is gone.
for thumb in "$OUT_DIR"/*.webp; do
  name="$(basename "$thumb" .webp)"
  stem="$(echo "$name" | sed -E 's/-(400|800)$//')"
  if [[ ! -f "$SRC_DIR/${stem}.webp" ]]; then
    rm -f "$thumb"
    removed=$((removed + 1))
  fi
done
shopt -u nullglob

total="$(ls "$OUT_DIR" 2>/dev/null | wc -l | tr -d ' ')"
echo "thumbnails: ${built} built, ${current} already current, ${removed} removed (${total} total in ${OUT_DIR})"
