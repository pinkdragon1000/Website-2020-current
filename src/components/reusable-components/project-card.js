import React from "react";
import Style from "style-it";
import { WhiteCard } from "../export-components";

export default function ProjectCard(props) {
  const styles = `
    .project-card h3 {
        text-align: center;
        padding-bottom: 2rem;
    }

    .project-card {
        width: 40rem; 
        min-height: 20rem;
        text-align: left;
        padding: 1.6rem
        position: relative
    }

    .handleOverflow {
      height: 13rem;
      overflow: auto;
    }
    `;
  return Style.it(
    `${styles}`,
    <WhiteCard
      className="project-card"
    >
      <h3>{props.title}</h3>
      <div className="handleOverflow">{props.description}</div>
      {props.socialbox}
    </WhiteCard>
  );
}
