import React from "react";
import Style from "style-it";

export default function CardSubcontent(props) {
  const styles = `
    .card-subcontent-header {
      text-align: center;
      color: var(--dark-purple);
  }
    `;
  return Style.it(
    `${styles}`,
    <div>
      <h2 className="card-subcontent-header">{props.header}</h2>
      <div>{props.textcontent}</div>
    </div>
  );
}
