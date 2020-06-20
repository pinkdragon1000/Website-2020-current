import React, { Component } from "react";

class CardSubcontent extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.header}</h2>
        <div>{this.props.textcontent}</div>
      </div>
    );
  }
}
export default CardSubcontent;
