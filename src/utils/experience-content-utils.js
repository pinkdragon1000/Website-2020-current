import React from "react";
export const educationContent = [
  {
    header: "Education",
    textcontent:
      "Bachelor of Science in Data Science, Minor in Computer Science from Drexel University",
  },
];

export const experienceHeader = ["Work Experience"];

export const workExperienceContent = [
  {
    title: "Software Developer",
    date: "dates here",
    link: "https://investor.vanguard.com/corporate-portal/",
    linktext: "Vanguard",
    description: <div></div>,
  },
  {
    title: "Data Science Teaching Assistant",
    date: "dates here",
    link: "https://drexel.edu/cci/",
    linktext: "Drexel University College of Computing and Informatics",
    description: (
      <div>
        <li>
          Held office hours for 5 hours a week to answer questions about
          assignments in a number of topics including Python basics and
          libraries for data analysis (numpy, pandas, and matplotlib){" "}
        </li>
        <li>Graded assignments and provided feedback</li>
      </div>
    ),
  },

  {
    title: "Data Science Co-op",
    date: "dates here",
    link: "https://www.elapservices.com/",
    linktext: "ELAP Services",
    description: (
      <div>
        <li>Developed a machine learning model to predict customer churn.</li>
        <li> Leveraged Python packages including Pandas.</li>
        <li>
          Used the Microsoft R package MicrosoftML to construct fast forest,
          decision trees, decision forests, and logistic regression models. Used
          d3.js for visualization.
        </li>
        <li>
          Preprocessed and transformed healthcare data using Python and R.{" "}
        </li>
        <li>Developed tools in Python for streamlining ETL processes.</li>
        <li>Presented at a machine learning workshop on a bi-weekly basis</li>
        <li>Developed data visualizations using Tableau.</li>
      </div>
    ),
  },
  {
    title: "Software Engineering Intern",
    date: "dates here",
    link: "https://corporate.comcast.com/",
    linktext: "Comcast",
    description: (
      <div>
        <li>
          Developed and enhanced a web-based system used to manage operational
          IP video delivery infrastructure.
        </li>
        <li>Backend development using Ruby on Rails with MySQL.</li>
        <li>
          Participated in Comcast’s Agile software development processes and
          lifecycle.
        </li>
      </div>
    ),
  },
];
