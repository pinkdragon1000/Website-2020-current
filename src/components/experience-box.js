import React, { Component } from "react";

class ExperienceBox extends Component {
  render() {
    return (
      <div>
        <div className="experience-header">
          <p>{this.props.title}</p>
          <a href={this.props.link}>{this.props.linktext}</a>
        </div>
        <p className="date">{this.props.date}</p>
        <ul>{this.props.children}</ul>
        <br />
      </div>
    );
  }
}
export default ExperienceBox;
