import React from "react";
import Style from "style-it";

export default function ProjectCard(props) {
  const styles = `
    .project-card {
        width: 40rem;
        min-height: 20rem;
        background-color: var(--white);
        border-radius: 4.375rem;
        margin: 1.5rem;
        text-align: left;
        padding: 1.6rem;
        bottom: 0rem;
        position: relative;
    }

    .project-card h3 {
        text-align: center;
        padding-bottom: 2rem;
    }

    .handleOverflow {
      height: 13rem;
      overflow: auto;
    }

    .spacer {
      position: absolute;
      bottom: 0rem;
    }
    `;
  return Style.it(
    `${styles}`,
    <div className="project-card">
      <h3>{props.title}</h3>
      <div className="handleOverflow">{props.description}</div>
      <div className="spacer" />
      {props.socialbox}
    </div>
  );
}
