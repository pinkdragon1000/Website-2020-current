import React from "react";
import Style from "style-it";

export default function Stack(props) {
  const getSpacing = () => {
    if (props.spacing === "small") return "0.5rem";
    if (props.spacing === "medium") return "1rem";
    if (props.spacing === "large") return "1.5rem";
    return props.spacing || "1rem"; // default to medium
  };

  const styles = `
    .stack {
      display: flex;
      flex-direction: column;
      gap: ${getSpacing()};
    }
  `;

  return Style.it(
    `${styles}`,
    <div className={`stack ${props.className || ''}`}>
      {props.children}
    </div>
  );
}
