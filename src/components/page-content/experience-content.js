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
      {(() => {
        const grouped = [];
        let currentGroup = [];
        
        workExperienceContent.forEach((option, i) => {
          if (i === 0) {
            currentGroup.push(option);
          } else if (option.linktext === workExperienceContent[i - 1].linktext) {
            currentGroup.push(option);
          } else {
            grouped.push([...currentGroup]);
            currentGroup = [option];
          }
        });
        if (currentGroup.length > 0) {
          grouped.push(currentGroup);
        }
        
        return grouped.map((group, groupIndex) => (
          <ExperienceBox
            key={groupIndex}
            roles={group}
            linktext={group[0].linktext}
            link={group[0].link}
            logo={group[0].logo}
          />
        ));
      })()}

      <CardSubcontent header={experienceHeader[1]} />
      {(() => {
        const grouped = [];
        let currentGroup = [];
        
        volunteerExperienceContent.forEach((option, i) => {
          if (i === 0) {
            currentGroup.push(option);
          } else if (option.linktext === volunteerExperienceContent[i - 1].linktext) {
            currentGroup.push(option);
          } else {
            grouped.push([...currentGroup]);
            currentGroup = [option];
          }
        });
        if (currentGroup.length > 0) {
          grouped.push(currentGroup);
        }
        
        return grouped.map((group, groupIndex) => (
          <ExperienceBox
            key={groupIndex}
            roles={group}
            linktext={group[0].linktext}
            link={group[0].link}
            logo={group[0].logo}
          />
        ));
      })()}
    </div>
  );
}
