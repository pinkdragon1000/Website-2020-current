import React, { useState } from "react";
import { photoGroup } from "../../utils/photos-content-utils";
import PhotoCard from "../reusable-components/photo-card";
import PhotoGalleryModal from "../reusable-components/photo-gallery-modal";

export default function PhotosContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Flatten all photos into a single array
  const allPhotos = photoGroup.flat().map(photo => require("../../images/" + photo));

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
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
      {photoGroup.map((option, i) => {
        const baseIndex = photoGroup.slice(0, i).reduce((acc, group) => acc + group.filter(Boolean).length, 0);
        
        return (
          <div className="row" key={i} style={{ marginBottom: '1.5rem' }}>
            <PhotoCard 
              imagesrc={require("../../images/" + option[0])} 
              onClick={() => openGallery(baseIndex)}
            />
            {option[1] && (
              <PhotoCard 
                imagesrc={require("../../images/" + option[1])} 
                onClick={() => openGallery(baseIndex + 1)}
              />
            )}
            {option[2] && (
              <PhotoCard 
                imagesrc={require("../../images/" + option[2])} 
                onClick={() => openGallery(baseIndex + 2)}
              />
            )}
          </div>
        );
      })}
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
