import React from "react";
export const projectsContent = [
  {
    title: "Toast",
    link: "https://github.com/cci-toast",
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
    link: "https://github.com/pinkdragon1000/Zesty",
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
    link: "https://github.com/pinkdragon1000/Listy",
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
    link: "https://github.com/pinkdragon1000/NOVA-Data-Science-Signin-Form",
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
    link: "https://github.com/pinkdragon1000/BuddyUApp",
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
    link: "https://github.com/pinkdragon1000/Bank-Churn-Modelling",
    description: (
      <div>
        Predicting whether a customer is likely to leave (churn) from the bank
        or not using Pyspark (Python) and Hadoop.
      </div>
    ),
  },
  {
    title: "Credit Card Fraud Detection",
    link: "https://github.com/pinkdragon1000/Credit-Card-Fraud-Detection",
    description: (
      <div>
        Binary classification problem to predict whether a transaction is
        fraudulent or not using Python's Scikit-Learn library.
      </div>
    ),
  },
  {
    title: "Malaria Detection",
    link: "https://github.com/pinkdragon1000/Malaria-Detection",
    description: (
      <div>
        Used a CNN model to classify images as being parasitized or not.
        Leveraged the Fast.ai library and Python.
      </div>
    ),
  },
  {
    title: "Fashion MNIST Clothing Classification",
    link:
      "https://github.com/pinkdragon1000/Fashion-MNIST-Clothing-Classification",
    description: (
      <div>
        Used deep learning algorithms and techniques to classify clothing
        images. Built using Tensorflow, Keras and Python.
      </div>
    ),
  },
  {
    title: "News Tweet Analysis",
    link: "https://github.com/pinkdragon1000/News-Tweet-Analysis",
    description: (
      <div>
        Performed natural language processing on Twitter feeds using the Tweepy
        streaming API, Python, NLTK, Beautiful Soup and MongoDB Atlas.
      </div>
    ),
  },
  {
    title: "Mushroom Classification",
    link: "https://github.com/pinkdragon1000/Mushroom-Classification",
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
    link: "https://github.com/pinkdragon1000/Black-Friday-Project",
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
    link: "https://github.com/pinkdragon1000/Student-Performance-Analysis",
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

export var array = [];
var size = 3;
while (projectsContent.length > 0) array.push(projectsContent.splice(0, size));
