//This file contains the content used for the welcome section of the application.  Rendered in welcome-content.js

import React from "react";
import { SkillsCard } from "../components/export-components";

export const welcomeContent = [
  {
    header: "About Me",
    textcontent:
      "My name is Sita Robinson. I currently work as a Software Developer at Booz Allen Hamilton.  Prior to Booz Allen, I worked at Vanguard for two years.  I graduated from Drexel University with a BS in Data Science and minor in Computer Science in 2020. Some of my hobbies include programming, crochet (amigurumi), landscape photography, quilting, playing Scrabble and traveling around the world. I am a Northern Virginia/Metro D.C. native.",
  },
  {
    header: "Skills",
    textcontent: (
      <div className="column">
        <div className="row">
          <SkillsCard iconName="layers" category="Frameworks/Libraries" skills="React.js, Spring Framework, Flask, Next.js" />
          <SkillsCard iconName="layers" category="State Management" skills="Redux" />
        </div>
        <div className="row">
          <SkillsCard iconName="code" category="JS Build Systems" skills="Webpack, Vite" />
          <SkillsCard iconName="code" category="Languages" skills="HTML/CSS, SCSS, JavaScript, Node.js, Python, Java, Typescript" />
        </div>
        <div className="row">
          <SkillsCard iconName="database" category="Databases" skills="SQL, Firebase, MongoDB Atlas" />
          <SkillsCard iconName="tool" category="Tools" skills="Jupyter Notebook, Tableau" />
        </div>
        <div className="row">
          <SkillsCard iconName="monitor" category="Monitoring Tools" skills="Splunk, Honeycomb" />
          <SkillsCard iconName="cloud" category="Cloud Computing" skills="AWS, Google Cloud" />
        </div>
        <div className="row">
          <SkillsCard iconName="sparkles" category="AI Tools" skills="Github Copilot, Amazon Q, Cursor" />
          <SkillsCard iconName="palette" category="UX Collaboration & Prototyping" skills="Figma, MockFlow, Responsive Design, Accessibility (WCAG)" />
        </div>
        <div className="row">
          <SkillsCard iconName="cog" category="Other" skills="Jenkins, ArgoCD, Github Actions, Bamboo, Git, Bitbucket, Java Debugger, Chrome Dev Tools" />
        </div>
      </div>
    ),
  },
  {
    header: "Places I've Traveled",
    textcontent: (
      <div>
        <iframe
          title="places"
          width="100%"
          height="640px"
          src="https://www.arcgis.com/apps/View/index.html?appid=4a73d707660146828bffd29123f7804f"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    ),
  },
];
