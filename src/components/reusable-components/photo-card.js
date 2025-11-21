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

    }

    .image-fit{
        border-radius: 4.375rem;
        object-fit: cover; 
        width: 18.75rem; 
        height: 18.75rem; 
    }

    .spacer {
      position: absolute;
      bottom: 0rem;
    }
    `;
  return Style.it(
    `${styles}`,
    <div className="photo-card">
      <img className="image-fit" loading="lazy" src={props.imagesrc} alt="" />
    </div>
  );
}
