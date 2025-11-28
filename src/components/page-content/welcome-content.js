import React from "react";
import { CardSubcontent } from "../export-components";
import { welcomeContent } from "../../utils/welcome-content-utils";

export default function WelcomeContent() {
  return (
    <>
      {welcomeContent.map((option, i) => (
        <CardSubcontent
          key={i}
          header={option.header}
          textcontent={option.textcontent}
        />
      ))}
    </>
  );
}
