import React, { Component } from "react";

class CardSubcontent extends Component {
  render() {
    return (
      <div>
        <h2 className="card-subcontent-header">{this.props.header}</h2>
        <div>{this.props.textcontent}</div>
      </div>
    );
  }
}
export default CardSubcontent;
