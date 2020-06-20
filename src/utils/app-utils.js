import React from "react";
export const navbarOptions = [
  "Welcome",
  "Experience",
  "Projects",
  "Places I've Traveled",
  "Photos",
];

export const welcomeContent = [
  {
    header: "About Me",
    textcontent:
      "My name is Sita Robinson. I will work at Vanguard as a Software Developer starting in mid-July. I graduated from Drexel University with a BS in Data Science and minor in Computer Science in 2020. Some of my hobbies include programming, landscape photography, playing the clarinet, playing Scrabble and traveling around the world. I am originally a Northern Virginia/Metro D.C. native.",
  },
  {
    header: "Skills",
    textcontent: (
      <div>
        Intermediate: Python, HTML/CSS, Javascript, Firebase, Microsoft SQL,
        MySQL, Oracle SQL, MariaDB, Android Studio, Markdown, Jupyter Notebook,
        C++ <br /> Beginner: R, Node.js, ArcGIS (ArcMap, ArcGIS Online), LaTeX,
        Java, Unix, Tableau, JQuery Mobile, JQuery, Flask, Ruby on Rails,
        ReactJS, Hadoop, Apache Spark, Google Cloud, Angular
      </div>
    ),
  },
];

export const educationContent = [
  {
    header: "Education",
    textcontent:
      "Bachelor of Science in Data Science, Minor in Computer Science from Drexel University",
  },
];

export const workExperienceContent = [
  {
    header: "Work Experience",
    textcontent: (
      <div>
        <p>Data Science Teaching Assistant</p>
        <a href="https://drexel.edu/cci/">
          Drexel University College of Computing and Informatics
        </a>
        <ul>
          <li>
            Held office hours for 5 hours a week to answer questions about
            assignments in a number of topics including Python basics and
            libraries for data analysis (numpy, pandas, and matplotlib){" "}
          </li>
          <li>Graded assignments and provided feedback</li>
        </ul>
        <br />

        <p>Data Science Co-op</p>
        <a href="https://www.elapservices.com/">ELAP Services</a>
        <ul>
          <li>Developed a machine learning model to predict customer churn.</li>
          <li> Leveraged Python packages including Pandas.</li>
          <li>
            Used the Microsoft R package MicrosoftML to construct fast forest,
            decision trees, decision forests, and logistic regression models.
            Used d3.js for visualization.
          </li>
          <li>
            Preprocessed and transformed healthcare data using Python and R.{" "}
          </li>
          <li>Developed tools in Python for streamlining ETL processes.</li>
          <li>Presented at a machine learning workshop on a bi-weekly basis</li>
          <li>Developed data visualizations using Tableau.</li>
        </ul>

        <p>Software Engineering Intern</p>
        <a href="https://corporate.comcast.com/">Comcast</a>
        <ul>
          <li>
            Developed and enhanced a web-based system used to manage operational
            IP video delivery infrastructure.
          </li>
          <li>Backend development using Ruby on Rails with MySQL.</li>
          <li>
            Participated in Comcast’s Agile software development processes and
            lifecycle.
          </li>
        </ul>
      </div>
    ),
  },
];
