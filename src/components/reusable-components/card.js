import React, { Component } from "react";
import Style from "style-it";

class Card extends Component {
  render() {
    const styles = `
    .content-text {
      background-color: var(--grey);
      border-radius: 8.75rem;
      height: 100%;
      min-height: 26rem;
      width: 70vw;
      padding: 3rem;
  }
    `;
    return Style.it(
      `${styles}`,
      <div className="column center-container">
        <div className="content-text">{this.props.children}</div>
      </div>
    );
  }
}
export default Card;
