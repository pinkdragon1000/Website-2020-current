//This file contains the content used for the welcome section of the application.  Rendered in welcome-content.js

import React from "react";
import { Table } from "../components/export-components";

export const welcomeContent = [
  {
    header: "About Me",
    textcontent:
      "My name is Sita Robinson. I currently work as a Software Developer at Booz Allen Hamilton.  Prior to Booz Allen, I worked at Vanguard for two years.  I graduated from Drexel University with a BS in Data Science and minor in Computer Science in 2020. Some of my hobbies include programming, crochet (amigurumi), landscape photography, quilting, playing Scrabble and traveling around the world. I am a Northern Virginia/Metro D.C. native.",
  },
  {
    header: "Skills",
    textcontent: (
      <Table 
        headers={[
          { key: "category", label: "Category" },
          { key: "skills", label: "Skills" }
        ]}
        rows={[
          { category: "Frameworks/Libraries", skills: "React.js, Spring Framework, Flask, Next.js" },
          { category: "State Management", skills: "Redux" },
          { category: "JS Build Systems", skills: "Webpack, Vite" },
          { category: "Languages", skills: "HTML/CSS, SCSS, JavaScript, Node.js, Python, Java, Typescript" },
          { category: "Databases", skills: "SQL, Firebase, MongoDB Atlas" },
          { category: "Tools", skills: "Jupyter Notebook, Tableau" },
          { category: "Monitoring Tools", skills: "Splunk, Honeycomb" },
          { category: "Cloud Computing", skills: "AWS, Google Cloud" },
          { category: "AI Tools", skills: "Github Copilot, Amazon Q, Cursor" },
          { category: "UX Collaboration & Prototyping", skills: "Wireframing/Prototyping (Figma, MockFlow), Responsive Design, Accessibility (WCAG)" },
          { category: "Other", skills: "Jenkins, ArgoCD, Github Actions, Bamboo, Git, Bitbucket, Java Debugger, Chrome Dev Tools" }
        ]}
      />
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
