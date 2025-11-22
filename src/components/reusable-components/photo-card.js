import React from "react";
import Style from "style-it";

export default function PhotoCard(props) {
  const styles = `
    .photo-card {
        margin: 0;
        text-align: center;
        padding: 0;
        position: relative;
        cursor: pointer;
        flex-shrink: 0;
    }

    .image-fit{
        border-radius: 1rem;
        object-fit: cover; 
        width: 18.75rem; 
        height: 18.75rem;
        display: block;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .photo-card:hover .image-fit {
        transform: scale(1.05);
        box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
    }

    .spacer {
      position: absolute;
      bottom: 0rem;
    }
    `;
  return Style.it(
    `${styles}`,
    <div className="photo-card" onClick={props.onClick}>
      <img className="image-fit" loading="lazy" src={props.imagesrc} alt="" />
    </div>
  );
}
