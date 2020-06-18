import React, { Component } from "react";
import CardSubcontent from "../card-subcontent";
class WelcomeContent extends Component {
  render() {
    return (
      <div>
        <CardSubcontent
          header="About Me"
          textcontent="My name is Sita Robinson. I currently work at Vanguard as a Software
            Developer. I graduated from Drexel University with a BS in Data
            Science and minor in Computer Science in 2020. Some of my hobbies
            include programming, landscape photography, playing the clarinet,
            playing Scrabble and traveling around the world. I am originally a
            Northern Virginia/Metro D.C. native."
        ></CardSubcontent>

        <CardSubcontent
          header="Skills"
          textcontent={
            <div>
              Intermediate: Python, HTML/CSS, Javascript, Firebase, Microsoft
              SQL, MySQL, Oracle SQL, MariaDB, Android Studio, Markdown, Jupyter
              Notebook, C++
              <br />
              Beginner: R, Node.js, ArcGIS (ArcMap, ArcGIS Online), LaTeX, Java,
              Unix, Tableau, JQuery Mobile, JQuery, Flask, Ruby on Rails,
              ReactJS, Hadoop, Apache Spark, Google Cloud, Angular
            </div>
          }
        ></CardSubcontent>
      </div>
    );
  }
}

export default WelcomeContent;
