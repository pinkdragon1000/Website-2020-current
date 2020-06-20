import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card">
        <p>{this.props.title}</p>
        {this.props.description}
      </div>
    );
  }
}

export default ProjectCard;
