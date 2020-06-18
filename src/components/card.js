import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="column center-container">
        <div className="content-text">{this.props.children}</div>
      </div>
    );
  }
}
export default Card;
