//This file contains the content used for projects.  Rendered in projects-content.js

import React from "react";
import { groupArrayBySize } from "./array-utils";
import SnailandProj from "../project-images/SnailandProj.jpg";
import FamilyTreeProj from "../project-images/FamilyTreeProj.jpg";
import FinProj from "../project-images/FinProj.jpg";
import ToastProj from "../project-images/ToastProj.jpg";
import ZestyProj from "../project-images/ZestyProj.jpg";

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
];

//Groups projects into arrays of two to make it easier to put two projects on each row.
export const projectGroup = groupArrayBySize(projectsContent, 2);
