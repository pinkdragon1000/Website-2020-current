import React from "react";
import Style from "style-it";

class Header extends React.Component {
  render() {
    const styles = `
    .row {
      height: 7rem;
    }
    .gradient-bg {
      background: var(--gradient);
      padding-top: 1.5rem;
      min-width: 618px;
    }

    .header-img {
      border-radius: 50%;
      margin-top: 5rem;
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
          {this.props.socialbox}
        </div>
      </div>
    );
  }
}
export default Header;
