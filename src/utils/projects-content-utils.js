//This file contains the content used for projects.  Rendered in projects-content.js

import React from "react";

export const projectsContent = [
  {
    title: "Toast",
    description: (
      <div>
        A financial planning application for financial advisors and their
        clients using React and Django. Developed the React portion of the
        application and deployed to Firebase Hosting.
      </div>
    ),
    socialBoxOptions: [
      { icon: "code", url: "https://github.com/cci-toast" },
      { icon: "video", url: "https://youtu.be/nUC91Z_Uhfw" },
    ],
  },
  {
    title: "Zesty",
    description: (
      <div>
        A recipe management and grocery list generator app created using HTML,
        Javascript, Bootstrap, Jinja and Flask (Python) hosted on a Google Cloud
        VM instance.
      </div>
    ),
    socialBoxOptions: [
      { icon: "code", url: "https://github.com/pinkdragon1000/Zesty" },
    ],
  },
  {
    title: "Listy",
    description: (
      <div>
        A web app that allows people to make their own checklists and share with
        other members. Uses HTML, Javascript, JQuery Mobile, Bootstrap, MySQL,
        and NodeJS.
      </div>
    ),
    socialBoxOptions: [
      { icon: "code", url: "https://github.com/pinkdragon1000/Listy" },
      { icon: "video", url: "https://photos.app.goo.gl/1W99xsGvydVPLqTh7" },
    ],
  },
  {
    title: "NOVA Datascience Signin and Attendee Randomizer",
    description: (
      <div>
        A web app for the NOVA DataScience Meetup Group that includes a sign-in
        form and a randomizer for prizes. Uses Firebase which is a NoSQL
        Database along with HTML and Javascript.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/NOVA-Data-Science-Signin-Form",
      },
      { icon: "video", url: "https://photos.app.goo.gl/LdME7wobGzXXXxAr5" },
    ],
  },
  {
    title: "BuddyU App",
    description: (
      <div>
        An android social app for Drexel University students to collaborate on
        their schedules with the goal of making class time more efficient,
        collaborative, and fun. Made using Firebase and Android Studio.
      </div>
    ),
    socialBoxOptions: [
      { icon: "code", url: "https://github.com/pinkdragon1000/BuddyUApp" },
      { icon: "video", url: "https://goo.gl/photos/PXjPnL5U6ujkRPCq8" },
    ],
  },
  {
    title: "Bank Churn Modeling",
    description: (
      <div>
        Predicting whether a customer is likely to leave (churn) from the bank
        or not using Pyspark (Python) and Hadoop.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Bank-Churn-Modelling",
      },
    ],
  },
  {
    title: "Credit Card Fraud Detection",
    description: (
      <div>
        Binary classification problem to predict whether a transaction is
        fraudulent or not using Python's Scikit-Learn library.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Credit-Card-Fraud-Detection",
      },
    ],
  },
  {
    title: "Malaria Detection",
    description: (
      <div>
        Used a CNN model to classify images as being parasitized or not.
        Leveraged the Fast.ai library and Python.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Malaria-Detection",
      },
    ],
  },
  {
    title: "Fashion MNIST Clothing Classification",
    description: (
      <div>
        Used deep learning algorithms and techniques to classify clothing
        images. Built using Tensorflow, Keras and Python.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url:
          "https://github.com/pinkdragon1000/Fashion-MNIST-Clothing-Classification",
      },
    ],
  },
  {
    title: "News Tweet Analysis",
    description: (
      <div>
        Performed natural language processing on Twitter feeds using the Tweepy
        streaming API, Python, NLTK, Beautiful Soup and MongoDB Atlas.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/News-Tweet-Analysis",
      },
    ],
  },
  {
    title: "Mushroom Classification",
    description: (
      <div>
        Used the Python Scikit-Learn library to train and test the "Mushroom
        Classification" dataset from Kaggle to predict whether a mushroom is
        poisonous or edible. Used classification algorithms including SVM, Naive
        Bayes, and Logistic Regression.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Mushroom-Classification",
      },
    ],
  },
  {
    title: "Black Friday Analysis",
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
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Black-Friday-Project",
      },
    ],
  },
  {
    title: "Student Performance Analysis",
    description: (
      <div>
        Built machine learning models using random forest to predict what
        factors are most important for student performance in math, writing, and
        reading exams using the "Student Performance in Exams" dataset from
        Kaggle. Performed pre-processing and exploratory data analysis. This
        project was completed using the R language.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Student-Performance-Analysis",
      },
    ],
  },
  {
    title: "Food Production Analysis",
    description: (
      <div>
        Data pre-processing and exploratory data analysis on the "Who eats the
        food we grow?" dataset from Kaggle.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Food-Production-Analysis",
      },
    ],
  },
  {
    title: "Quali",
    description: (
      <div>
        Developed a web application with backend to match the skills and
        qualifications needed for a job. Created a web scraper using the
        Beautiful Soup library in Python to scrape job data from Indeed.com.
        Leveraged text analytics to match employee skills to job postings. Used
        Flask which is a framework to run Python as a web server.
      </div>
    ),
    socialBoxOptions: [],
  },
];

//Groups projects into arrays of two to make it easier to put two projects on each row.
export var projectGroup = [];
var size = 2;
while (projectsContent.length > 0)
  projectGroup.push(projectsContent.splice(0, size));
