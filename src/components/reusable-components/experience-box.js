import React from "react";
import Style from "style-it";

export default function ExperienceBox(props) {
  const styles = `
    .experience-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 0rem;
    }

    .date {
        color: var(--dark-grey);
        font-weight: 400;
        font-size: 1.1rem;
    }
    `;
  return Style.it(
    `${styles}`,
    <div>
      <div className="experience-header">
        <h3>{props.title}</h3>
        <a href={props.link}>{props.linktext}</a>
      </div>
      <p className="date">{props.date}</p>
      <ul>{props.children}</ul>
      <br />
    </div>
  );
}
