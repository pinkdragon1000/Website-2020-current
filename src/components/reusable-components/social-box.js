import React from "react";
import { Icon } from "../export-components";

export default function SocialBox(props) {
  return (
    <div className="row center-container">
      {props.options.map((option, i) => (
        <a href={option.url} target="blank_" key={i}>
          <Icon
            name={option.icon}
            fill={props.fill}
            width={props.width || 50}
            height={props.height || 50}
          />
        </a>
      ))}
    </div>
  );
}
