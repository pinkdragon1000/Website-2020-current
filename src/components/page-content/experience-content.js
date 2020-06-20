import React, { Component } from "react";
import CardSubcontent from "../card-subcontent";
import ExperienceBox from "../experience-box";

import {
  educationContent,
  experienceHeader,
  workExperienceContent,
} from "../../utils/app-utils";

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

        {workExperienceContent.map((option, i) => (
          <div>
            <CardSubcontent key={i} header={experienceHeader[i]} />
            <ExperienceBox
              key={i + 100}
              title={option.title}
              date={option.date}
              linktext={option.linktext}
              link={option.link}
            >
              {option.description}
            </ExperienceBox>
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceContent;
