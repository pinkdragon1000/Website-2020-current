import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
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
