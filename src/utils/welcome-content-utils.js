//This file contains the content used for the welcome section of the application.  Rendered in welcome-content.js

import React from "react";
export const welcomeContent = [
  {
    header: "About Me",
    textcontent:
      "My name is Sita Robinson. I currently work as a Software Developer at Booz Allen Hamilton.  Prior to Booz Allen, I worked at Vanguard for two years.  I graduated from Drexel University with a BS in Data Science and minor in Computer Science in 2020. Some of my hobbies include programming, crochet (amigurumi), landscape photography, playing the clarinet, playing Scrabble and traveling around the world. I am a Northern Virginia/Metro D.C. native.",
  },
  {
    header: "Skills",
    textcontent: (
      <div>
        Intermediate: Python, HTML/CSS, Javascript, Firebase, Microsoft SQL,
        MySQL, Oracle SQL, Flask, ReactJS, Angular, Spring Framework, Android
        Studio
        <br />
        Beginner: R, ArcGIS (ArcMap, ArcGIS Online), Tableau, JQuery, Google
        Cloud, AWS
        <br />
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
  {
    header: "Favorite Eats",
    textcontent: (
      <div>
        <iframe type="favEats" src="https://storymaps.arcgis.com/stories/d000920fa6f64d4bbd3901add575b620?cover=false" width="100%" height="700px" frameborder="0" allowfullscreen allow="geolocation" />
      </div>
    )
  },
];
