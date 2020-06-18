import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="column center-container">
        <ul id="nav">
          <li>
            <a href="/">Welcome</a>
          </li>
          <li>
            <a href="/">Experience</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Places I've Traveled</a>
          </li>
          <li>
            <a href="/">Photos</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
