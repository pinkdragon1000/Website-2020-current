import React from "react";
import Style from "style-it";
import { WhiteCard } from "../export-components";

export default function ProjectCard(props) {
  const styles = `
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
    <WhiteCard 
      className="project-card" 
      style={{ 
        width: '40rem', 
        minHeight: '20rem', 
        textAlign: 'left', 
        padding: '1.6rem',
        position: 'relative'
      }}
    >
      <h3>{props.title}</h3>
      <div className="handleOverflow">{props.description}</div>
      <div className="spacer" />
      {props.socialbox}
    </WhiteCard>
  );
}
