import React, { Component } from "react";
import CardSubcontent from "../card-subcontent";
import ExperienceBox from "../experience-box";

import {
  educationContent,
  experienceHeader,
  workExperienceContent,
} from "../../utils/experience-content-utils";

class ExperienceContent extends Component {
  render() {
    return (
      <div>
        {educationContent.map((option, i) => (
          <CardSubcontent
            key={i}
            header={option.header}
            textcontent={option.textcontent}
          />
        ))}

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
      </div>
    );
  }
}

export default ExperienceContent;
