import React, { Component } from "react";
import Style from "style-it";

class CardSubcontent extends Component {
  render() {
    const styles = `
    .card-subcontent-header {
      text-align: center;
  }
    `;
    return Style.it(
      `${styles}`,
      <div>
        <h2 className="card-subcontent-header">{this.props.header}</h2>
        <div>{this.props.textcontent}</div>
      </div>
    );
  }
}
export default CardSubcontent;
