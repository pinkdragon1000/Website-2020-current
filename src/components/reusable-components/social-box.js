import React, { Component } from "react";
import Icon from "./icon";

class SocialBox extends Component {
  render() {
    return (
      <div className="row center-container">
        {this.props.options.map((option, i) => (
          <Icon key={i} name={option} fill="white" width={50} height={50} />
        ))}
      </div>
    );
  }
}

export default SocialBox;
