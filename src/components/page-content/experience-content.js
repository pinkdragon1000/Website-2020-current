import React, { Component } from "react";
import CardSubcontent from "../card-subcontent";

import { educationContent, workExperienceContent } from "../../utils/app-utils";

class ExperienceContent extends Component {
  render() {
    return (
      <div>
        <CardSubcontent
          header={educationContent[0].header}
          textcontent={educationContent[0].textcontent}
        ></CardSubcontent>

        <CardSubcontent
          header={workExperienceContent[0].header}
          textcontent={workExperienceContent[0].textcontent}
        ></CardSubcontent>
      </div>
    );
  }
}

export default ExperienceContent;
