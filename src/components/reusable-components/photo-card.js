import React from "react";
import Style from "style-it";

export default function PhotoCard(props) {
  const styles = `
    .photo-card {
        margin: 0;
        padding: 0;
        cursor: pointer;
        flex: 1;
        min-width: 0;
        max-width: 26.17rem;
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
    <div className="photo-card" onClick={props.onClick}>
      <img className="image-fit" loading="lazy" src={props.imagesrc} alt="" />
    </div>
  );
}
