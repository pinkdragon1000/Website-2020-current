import React, { Component } from "react";
import Style from "style-it";

class Header extends Component {
  render() {
    const styles = `
    .gradient-bg {
      background: var(--gradient);
      border-radius: 0rem 0rem 2rem 2rem;
      padding-top: 1.5rem;
    }

    .header-img {
      vertical-align: middle;
      border-radius: 50%;
    }

    .header {
      color: var(--white);
      font-size: 5rem;
      padding-left: 2rem;
    }

    .subheader {
      font-weight: 400;
      color: var(--white);
      text-align: center;
    }
    `;
    return Style.it(
      `${styles}`,
      <div className="gradient-bg">
        <div className="column">
          <div className="row center-container">
            <img className="header-img" src={this.props.imgdir} alt="" />
            <h1 className="header">{this.props.header}</h1>
          </div>
          <h1 className="subheader">{this.props.subheader}</h1>
        </div>
      </div>
    );
  }
}
export default Header;
