import React from "react";
import Style from "style-it";

export default function Footer(props) {
  const styles = `
    .footer {
        padding-top: 1rem;
    }
    `;
  return Style.it(`${styles}`, <div className="footer flex-center">{props.label}</div>);
}
