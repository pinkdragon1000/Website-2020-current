import React from "react";
import Style from "style-it";
import { CardSubcontent, ExperienceBox, EducationCard } from "../export-components";

import {
  educationContent,
  experienceHeader,
  workExperienceContent,
  volunteerExperienceContent,
} from "../../utils/experience-content-utils";

export default function ExperienceContent() {
  const styles = `
    .education-row {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
    }
  `;

  return Style.it(
    `${styles}`,
    <div>
      <CardSubcontent header="Education" />
      <div className="education-row">
        {educationContent.map((option, i) => (
          <EducationCard
            key={i}
            school={option.school}
            degree={option.degree}
            year={option.year}
            logo={option.logo}
          />
        ))}
      </div>

      <CardSubcontent header={experienceHeader[0]} />
      {workExperienceContent.map((option, i) => (
        <ExperienceBox
          key={i + 100}
          title={option.title}
          date={option.date}
          linktext={option.linktext}
          link={option.link}
        >
          {option.description}
        </ExperienceBox>
      ))}

      <CardSubcontent header={experienceHeader[1]} />
      {volunteerExperienceContent.map((option, i) => (
        <ExperienceBox
          key={i + 100}
          title={option.title}
          date={option.date}
          linktext={option.linktext}
          link={option.link}
        >
          {option.description}
        </ExperienceBox>
      ))}
    </div>
  );
}
