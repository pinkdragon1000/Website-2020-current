import React, { Component } from "react";
import CardSubcontent from "../card-subcontent";
import { welcomeContent } from "../../utils/app-utils";

class WelcomeContent extends Component {
  render() {
    return (
      <div>
        <CardSubcontent
          header={welcomeContent[0].header}
          textcontent={welcomeContent[0].textcontent}
        />

        <CardSubcontent
          header={welcomeContent[1].header}
          textcontent={welcomeContent[1].textcontent}
        />
      </div>
    );
  }
}

export default WelcomeContent;
