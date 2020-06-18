import React, { Component } from "react";

class CardSubcontent extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.header}</h2>
        <p>{this.props.textcontent}</p>
      </div>
    );
  }
}
export default CardSubcontent;
