import React, { Component } from "react";
import { Icon } from "../export-components";

class SocialBox extends Component {
  render() {
    return (
      <div className="row center-container">
        {this.props.options.map((option, i) => (
          <a href={option.url} target="blank_" key={i}>
            <Icon name={option.icon} fill="white" width={50} height={50} />
          </a>
        ))}
      </div>
    );
  }
}

export default SocialBox;
