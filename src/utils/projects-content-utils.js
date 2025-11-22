//This file contains the content used for projects.  Rendered in projects-content.js

import React from "react";
import { groupArrayBySize } from "./array-utils";

export const projectsContent = [
  {
    title: "Fin",
    description: (
      <div>
        An application used to keep track of deposits and withdraws in an
        account. Created using Angular and Spring (Java) API. The Angular
        frontend application is deployed using Firebase Hosting. The Spring API
        backend is deployed using Heroku.
      </div>
    ),
    socialBoxOptions: [
      { icon: "code", url: "https://github.com/pinkdragon1000/Fin" },
    ],
  },
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
      { icon: "video", url: "https://youtu.be/5NR1RibM4Mc" },
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
];

//Groups projects into arrays of two to make it easier to put two projects on each row.
export const projectGroup = groupArrayBySize(projectsContent, 2);
