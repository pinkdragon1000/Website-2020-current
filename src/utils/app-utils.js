import React from "react";
import WelcomeContent from "../components/page-content/welcome-content";
import ExperienceContent from "../components/page-content/experience-content";
import ProjectsContent from "../components/page-content/projects-content";
import TravelContent from "../components/page-content/travel-content";
import PhotosContent from "../components/page-content/photos-content";

export const navbarOptions = [
  "Welcome",
  "Experience",
  "Projects",
  "Places I've Traveled",
  "Photos",
];

export const navbarComponentOptions = [
  <WelcomeContent />,
  <ExperienceContent />,
  <ProjectsContent />,
  <TravelContent />,
  <PhotosContent />,
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

export const projectsContent = [
  {
    title: "Toast",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        A financial planning application for financial advisors and their
        clients using React and Django. Developed the React portion of the
        application and deployed to Firebase Hosting.
      </div>
    ),
  },
  {
    title: "Zesty",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        A recipe management and grocery list generator app created using HTML,
        Javascript, Bootstrap, Jinja and Flask (Python) hosted on a Google Cloud
        VM instance.
      </div>
    ),
  },
  {
    title: "Listy",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        A web app that allows people to make their own checklists and share with
        other members. Uses HTML, Javascript, JQuery Mobile, Bootstrap, MySQL,
        and NodeJS.
      </div>
    ),
  },
  {
    title: "NOVA Datascience Signin and Attendee Randomizer",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        A web app for the NOVA DataScience Meetup Group that includes a sign-in
        form and a randomizer for prizes. Uses Firebase which is a NoSQL
        Database along with HTML and Javascript.
      </div>
    ),
  },
  {
    title: "BuddyU App",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        An android social app for Drexel University students to collaborate on
        their schedules with the goal of making class time more efficient,
        collaborative, and fun. Made using Firebase and Android Studio.
      </div>
    ),
  },
  {
    title: "Bank Churn Modeling",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        Predicting whether a customer is likely to leave (churn) from the bank
        or not using Pyspark (Python) and Hadoop.
      </div>
    ),
  },
  {
    title: "Credit Card Fraud Detection",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        Binary classification problem to predict whether a transaction is
        fraudulent or not using Python's Scikit-Learn library.
      </div>
    ),
  },
  {
    title: "Malaria Detection",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        Used a CNN model to classify images as being parasitized or not.
        Leveraged the Fast.ai library and Python.
      </div>
    ),
  },
  {
    title: "Fashion MNIST Clothing Classification",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        Used deep learning algorithms and techniques to classify clothing
        images. Built using Tensorflow, Keras and Python.
      </div>
    ),
  },
  {
    title: "News Tweet Analysis",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        Performed natural language processing on Twitter feeds using the Tweepy
        streaming API, Python, NLTK, Beautiful Soup and MongoDB Atlas.
      </div>
    ),
  },
  {
    title: "Mushroom Classification",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        Used the Python Scikit-Learn library to train and test the "Mushroom
        Classification" dataset from Kaggle to predict whether a mushroom is
        poisonous or edible. Used classification algorithms including SVM, Naive
        Bayes, and Logistic Regression.
      </div>
    ),
  },
  {
    title: "Black Friday Analysis",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        Performed exploratory analysis of Black Friday data using Python. In
        addition, used matrix factorization to study consumer behavior and
        provide recommendations for potential customers. We also explored the
        process of vectorization and the process of creating embeddings, using
        the results to find similar customers, find consumer groups using
        clustering, and predict what a given customer will buy.
      </div>
    ),
  },
  {
    title: "Student Performance Analysis",
    link: "https://drexel.edu/cci/",
    description: (
      <div>
        Built machine learning models using random forest to predict what
        factors are most important for student performance in math, writing, and
        reading exams using the "Student Performance in Exams" dataset from
        Kaggle. Performed pre-processing and exploratory data analysis. This
        project was completed using the R language.
      </div>
    ),
  },
];
