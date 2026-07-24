import React, { useState } from "react";
import { photoGroup } from "../../utils/photos-content-utils";
import PhotoCard from "../reusable-components/photo-card";
import PhotoGalleryModal from "../reusable-components/photo-gallery-modal";

//Smaller renditions of each photo, used by the grid.  The grid never shows a tile
//wider than ~419px, so downloading the full size image for it wastes bandwidth.
//Photos small enough that no rendition was generated simply fall back to the full
//size file, which is already tiny.
const thumbContext = require.context("../../image-thumbs", false, /\.webp$/);
const thumbs = {};
thumbContext.keys().forEach((key) => {
  thumbs[key.replace("./", "")] = thumbContext(key);
});

//The tiles sit three to a row, so each is roughly a third of the viewport until
//it hits its 419px cap.
const GRID_SIZES = "(min-width: 1400px) 419px, 31vw";

const getGridSources = (photo) => {
  const stem = photo.replace(/\.[^.]+$/, "");
  const small = thumbs[`${stem}-400.webp`];
  const medium = thumbs[`${stem}-800.webp`];

  //Only use a srcset when there is a rendition big enough for a retina tile,
  //otherwise the browser would be stuck picking something too small.
  if (!medium) return {};

  return {
    srcSet: [small && `${small} 400w`, `${medium} 800w`].filter(Boolean).join(", "),
    sizes: GRID_SIZES,
  };
};

export default function PhotosContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const photoCardRefs = React.useRef([]);

  // Flatten all photos into a single array
  const allPhotos = photoGroup.flat().map(photo => require("../../images/" + photo));

  const openGallery = (index, element) => {
    photoCardRefs.current[index] = element;
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
    // Return focus to the current photo card (not the one originally clicked)
    setTimeout(() => {
      const elementToFocus = photoCardRefs.current[currentImageIndex];
      if (elementToFocus) {
        elementToFocus.focus();
      }
    }, 0);
  };

  const nextImage = () => {
    if (currentImageIndex < allPhotos.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="column">
        {photoGroup.map((option, i) => {
          const baseIndex = photoGroup.slice(0, i).reduce((acc, group) => acc + group.filter(Boolean).length, 0);
          
          return (
            <div className="row" key={i}>
              {option.map((photo, j) => {
                const photoIndex = baseIndex + j;
                return photo && (
                  <PhotoCard
                    key={j}
                    imagesrc={require("../../images/" + photo)}
                    {...getGridSources(photo)}
                    photoName={photo}
                    onClick={(element) => openGallery(photoIndex, element)}
                    onRefReady={(element) => {
                      photoCardRefs.current[photoIndex] = element;
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <PhotoGalleryModal
        isOpen={isModalOpen}
        currentIndex={currentImageIndex}
        photos={allPhotos}
        onClose={closeGallery}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
