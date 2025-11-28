//This file contains the data used for the header, navbar and footer in app.js

import React from "react";
import {
  WelcomeContent,
  ExperienceContent,
  ProjectsContent,
  PhotosContent,
  TestimonialContent,
} from "../components/export-components";

//Data used for the header.
export const headerData = {
  imgdir: "../me.png",
  header: "Sita Robinson",
  subheader: "Software Developer",
};

//Social box icons and urls.  Part of the header but is optional if you wish.
export const socialBoxOptions = [
  { icon: "envelope", url: "mailto:sita.robinson@gmail.com", label: "Email contact" },
  { icon: "github", url: "https://github.com/pinkdragon1000", label: "GitHub profile" },
  { icon: "linkedin", url: "https://www.linkedin.com/in/sitarobinson/", label: "LinkedIn profile" },
];

//Navbar options and components used in the content of the page
export const navbarOptions = [
  {
    name: "Welcome",
    component: <WelcomeContent />,
  },
  {
    name: "Experience",
    component: <ExperienceContent />,
  },
  {
    name: "Projects",
    component: <ProjectsContent />,
  },
  {
    name: "Photos",
    component: <PhotosContent />,
  },
  {
    name: "Testimonials",
    component: <TestimonialContent />,
  },
];

//Data used in the footer.
export const footerData = "Ⓒ Sita Robinson 2025";
