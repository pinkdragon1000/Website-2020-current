import React from "react";

export default function CardSubcontent(props) {
  return (
    <div>
      <h2 className="flex-center">{props.header}</h2>
      <div>{props.textcontent}</div>
    </div>
  );
}
