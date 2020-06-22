import React, { Component } from "react";
import Style from "style-it";

class ProjectCard extends Component {
  render() {
    const styles = `
    .project-card {
        width: 30rem;
        height: 20rem;
        background-color: var(--white);
        border-radius: 4.375rem;
        margin: 1rem;
        text-align: center;
    }
    `;
    return Style.it(
      `${styles}`,
      <div className="project-card">
        <p>{this.props.title}</p>
        {this.props.description}
      </div>
    );
  }
}

export default ProjectCard;
