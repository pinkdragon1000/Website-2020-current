//This file contains the content used for the welcome section of the application.  Rendered in welcome-content.js

import React from "react";
export const welcomeContent = [
  {
    header: "About Me",
    textcontent:
      "My name is Sita Robinson. I currently work as a Software Developer at Booz Allen Hamilton.  Prior to Booz Allen, I worked at Vanguard for two years.  I graduated from Drexel University with a BS in Data Science and minor in Computer Science in 2020. Some of my hobbies include programming, crochet (amigurumi), landscape photography, quilting, playing Scrabble and traveling around the world. I am a Northern Virginia/Metro D.C. native.",
  },
  {
    header: "Skills",
    textcontent: (
      <table>
        <tr>
          <th>Category</th>
          <th>Skills</th>
        </tr>
        <tr>
          <td>Frameworks/Libraries</td>
          <td>React.js, Spring Framework, Flask, Next.js</td>
        </tr>
        <tr>
          <td>State Management</td>
          <td>Redux</td>
        </tr>
        <tr>
          <td>JS Build Systems</td>
          <td>Webpack, Vite</td>
        </tr>
        <tr>
          <td>Languages</td>
          <td>HTML/CSS, SCSS, JavaScript, Node.js, Python, Java, Typescript</td>
        </tr>
        <tr>
          <td>Databases</td>
          <td>SQL, Firebase, MongoDB Atlas</td>
        </tr>
        <tr>
          <td>Tools</td>
          <td>Jupyter Notebook, Tableau</td>
        </tr>
        <tr>
          <td>Monitoring Tools</td>
          <td>Splunk, Honeycomb</td>
        </tr>
        <tr>
          <td>Cloud Computing</td>
          <td>AWS, Google Cloud</td>
        </tr>
        <tr>
          <td>AI Tools</td>
          <td>Github Copilot, Amazon Q, Cursor</td>
        </tr>
        <tr>
          <td>UX Collaboration & Prototyping</td>
          <td>Wireframing/Prototyping (Figma, MockFlow), Responsive Design, Accessibility (WCAG)</td>
        </tr>
        <tr>
          <td>Other</td>
          <td>Jenkins, ArgoCD, Github Actions, Bamboo, Git, Bitbucket, Java Debugger, Chrome Dev Tools</td>
        </tr>
      </table>
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
  {
    header: "Favorite Eats",
    textcontent: (
      <div>
        <iframe title="favEats" src="https://storymaps.arcgis.com/stories/d000920fa6f64d4bbd3901add575b620?cover=false" width="100%" height="700px" frameBorder="0" allowfullscreen allow="geolocation" />
      </div>
    )
  },
];
