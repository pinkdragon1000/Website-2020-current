import React from "react";
import Style from "style-it";

export default function ProjectCard(props) {
  const styles = `
    .project-card {
        width: 40rem;
        min-height: 20rem;
        background-color: var(--white);
        border-radius: 4.375rem;
        margin: 1rem;
        text-align: center;
        padding: 1.6rem;
        bottom: 0rem;
        position: relative;
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
      <p>{props.title}</p>
      <div className="handleOverflow">{props.description}</div>
      <div className="spacer" />
      {props.socialbox}
    </div>
  );
}
