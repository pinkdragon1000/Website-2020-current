import React from "react";
import { photoGroup } from "../../utils/photos-content-utils";
import PhotoCard from "../reusable-components/photo-card";

export default function PhotosContent() {
  return (
    <div>
      {photoGroup.map((option, i) => (
        <div className="row">
          <PhotoCard imagesrc={require("../../images/" + option[0])} />
          {option[1] && <PhotoCard imagesrc={require("../../images/" + option[1])} />}
          {option[2] && <PhotoCard imagesrc={require("../../images/" + option[2])} />}
        </div>
      ))}
    </div>
  );
}
