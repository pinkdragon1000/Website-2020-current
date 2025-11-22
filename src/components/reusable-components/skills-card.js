import React from "react";
import Style from "style-it";
import { WhiteCard } from "../export-components";

export default function SkillsCard({ category, skills, iconName }) {
  const skillArray = skills.split(", ");

  const styles = `
    .skills-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-pill {
      background: var(--grey);
      color: var(--brown);
      padding: 0.5rem 0.5rem;
      border-radius: 1.5rem;
      font-size: 0.9rem;
      display: inline-block;
    }
  `;

  return Style.it(
    `${styles}`,
    <WhiteCard>
      <h3>{category}</h3>
      <br/>
      <div className="skills-pills">
        {skillArray.map((skill, index) => (
          <span key={index} className="skill-pill">
            {skill.trim()}
          </span>
        ))}
      </div>
    </WhiteCard>
  );
}
