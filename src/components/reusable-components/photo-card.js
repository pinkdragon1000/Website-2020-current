import React from "react";
import Style from "style-it";

export default function PhotoCard(props) {
  const styles = `
    .photo-card {
        width: 20rem;
        min-height: 15rem;
        margin: 0.02rem;
        text-align: center;
        padding: 0.5rem;
        bottom: 0rem;
        position: relative;
        cursor: pointer;
    }

    .image-fit{
        border-radius: 4.375rem;
        object-fit: cover; 
        width: 18.75rem; 
        height: 18.75rem;
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
