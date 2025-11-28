import React, { useState } from "react";
import { photoGroup } from "../../utils/photos-content-utils";
import PhotoCard from "../reusable-components/photo-card";
import PhotoGalleryModal from "../reusable-components/photo-gallery-modal";

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
