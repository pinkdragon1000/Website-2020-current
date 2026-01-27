//This file contains the content used for projects.  Rendered in projects-content.js

import React from "react";
import { groupArrayBySize } from "./array-utils";
import SnailandProj from "../project-images/SnailandProj.jpg";
import FamilyTreeProj from "../project-images/FamilyTreeProj.jpg";
import FinProj from "../project-images/FinProj.jpg";
import ToastProj from "../project-images/ToastProj.jpg";
import ZestyProj from "../project-images/ZestyProj.jpg";
import ListyProj from "../project-images/ListyProj.jpg";
import NOVADSProj from "../project-images/NOVADSProj.jpg";
import BuddyUProj from "../project-images/BuddyUProj.jpg";

export const projectsContent = [
  {
    title: "Family Tree",
    image: FamilyTreeProj,
    description: (
      <div>
        An interactive family tree visualization built with React and D3.js.
        Click nodes to expand and collapse branches, hover for detailed tooltips
        with photos and biographical information. Features adjustable text size,
        zoom/pan navigation, and auto-centering. Hosted on Firebase.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/FamilyTree",
        label: "Family Tree Github code",
      },
      {
        icon: "link",
        url: "https://smrfamilytree.web.app/",
        label: "Family Tree link",
      },
    ],
  },
  {
    title: "Snailand",
    image: SnailandProj,
    description: (
      <div>
        Snailand is a snail-themed endless runner built with React, featuring
        character selection, a canvas‑based game loop with obstacles and star
        pickups, plus sound effects.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Snailand",
        label: "Snailand Github code",
      },
    ],
  },

  {
    title: "Fin",
    image: FinProj,
    description: (
      <div>
        An application used to keep track of deposits and withdraws in an
        account. Created using Angular and Spring (Java) API. The Angular
        frontend application is deployed using Firebase Hosting. The Spring API
        backend is deployed using Heroku.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Fin",
        label: "Fin Github code",
      },
    ],
  },
  {
    title: "Toast",
    image: ToastProj,
    description: (
      <div>
        A financial planning application for financial advisors and their
        clients using React and Django. Developed the React portion of the
        application and deployed to Firebase Hosting.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/cci-toast",
        label: "Toast Github code",
      },
      {
        icon: "video",
        url: "https://youtu.be/nUC91Z_Uhfw",
        label: "Toast video",
      },
    ],
  },
  {
    title: "Zesty",
    image: ZestyProj,
    description: (
      <div>
        A recipe management and grocery list generator app created using HTML,
        Javascript, Bootstrap, Jinja and Flask (Python) hosted on a Google Cloud
        VM instance.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Zesty",
        label: "Zesty Github code",
      },
      {
        icon: "video",
        url: "https://youtu.be/5NR1RibM4Mc",
        label: "Zesty video",
      },
    ],
  },
  {
    title: "Listy",
    image: ListyProj,
    description: (
      <div>
        A web app that allows people to make their own checklists and share with
        other members. Uses HTML, Javascript, JQuery Mobile, Bootstrap, MySQL,
        and NodeJS.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/Listy",
        label: "Listy Github code",
      },
      {
        icon: "video",
        url: "https://photos.app.goo.gl/1W99xsGvydVPLqTh7",
        label: "Listy video",
      },
    ],
  },
  {
    title: "NOVA Datascience Signin and Attendee Randomizer",
    image: NOVADSProj,
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
        label: "NOVA Datascience Github code",
      },
      {
        icon: "video",
        url: "https://photos.app.goo.gl/LdME7wobGzXXXxAr5",
        label: "NOVA Datascience video",
      },
    ],
  },
  {
    title: "BuddyU App",
    image: BuddyUProj,
    description: (
      <div>
        An android social app for Drexel University students to collaborate on
        their schedules with the goal of making class time more efficient,
        collaborative, and fun. Made using Firebase and Android Studio.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/pinkdragon1000/BuddyUApp",
        label: "BuddyU App Github code",
      },
      {
        icon: "video",
        url: "https://goo.gl/photos/PXjPnL5U6ujkRPCq8",
        label: "BuddyU App video",
      },
    ],
  },
];

//Groups projects into arrays of two to make it easier to put two projects on each row.
export const projectGroup = groupArrayBySize(projectsContent, 2);
