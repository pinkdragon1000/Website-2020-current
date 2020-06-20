import React, { Component } from "react";
import CardSubcontent from "../card-subcontent";

import { educationContent, workExperienceContent } from "../../utils/app-utils";

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
          <CardSubcontent
            key={i}
            header={option.header}
            textcontent={option.textcontent}
          />
        ))}
      </div>
    );
  }
}

export default ExperienceContent;
