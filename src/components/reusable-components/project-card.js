import React from "react";
import Style from "style-it";
import { Icon, WhiteCard } from "../export-components";

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
        padding: 1.6rem;
        position: relative;
    }

    .project-image {
        padding-top: 1rem;
        width: 100%;
        margin-bottom: 1rem;
    }

    .handleOverflow {
        height: ${props.image ? '27rem' : '20rem'};
        overflow: auto;
    }
  `;
  
  return Style.it(
    styles,
    <WhiteCard className="project-card">
      <article>
        {props.showQuote && (
          <Icon name="quote" fill="var(--dark-purple)" width="3" height="3" opacity="0.3" aria-hidden="true" />
        )}
        <h3>{props.title}</h3>
        <div className="handleOverflow">
          {props.description}
          {props.image && (
            <img
              src={props.image}
              alt={props.title}
              className="project-image"
            />
          )}
        </div>
        {props.socialbox}
      </article>
    </WhiteCard>
  );
}
