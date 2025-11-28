import React, { useRef, useEffect } from "react";
import Style from "style-it";

function PhotoCard(props) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current && props.onRefReady) {
      props.onRefReady(cardRef.current);
    }
  }, [props]);

  const handleClick = () => {
    props.onClick(cardRef.current);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      props.onClick(cardRef.current);
    }
  };

  // Extract a readable description from the photo filename
  const getPhotoDescription = (filename) => {
    if (!filename) return "Photo";
    // Remove file extension and convert to readable format
    const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, '');
    // Replace underscores and hyphens with spaces, capitalize words
    const readable = nameWithoutExt
      .replace(/[_-]/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
    return readable;
  };

  const photoDescription = getPhotoDescription(props.photoName);

  const styles = `
    .photo-card {
        margin: 0;
        padding: 0;
        cursor: pointer;
        flex: 1;
        min-width: 0;
        max-width: 26.17rem;
    }

    .photo-card:focus {
        outline: 2px solid var(--light-purple);
        outline-offset: 2px;
        border-radius: 1rem;
    }

    .image-fit{
        border-radius: 1rem;
        object-fit: cover; 
        width: 100%;
        height: auto;
        aspect-ratio: 1;
        display: block;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .photo-card:hover .image-fit {
        transform: scale(1.05);
        box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
    }
    `;
  return Style.it(
    styles,
    <div 
      ref={cardRef}
      className="photo-card" 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open ${photoDescription} in gallery`}
    >
      <img className="image-fit" loading="lazy" src={props.imagesrc} alt={photoDescription} />
    </div>
  );
}

export default PhotoCard;
