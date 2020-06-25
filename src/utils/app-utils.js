import React from "react";
import {
  WelcomeContent,
  ExperienceContent,
  ProjectsContent,
  TravelContent,
  PhotosContent,
} from "../components/export-components";

export const headerData = {
  imgdir: "../me.png",
  header: "Sita Robinson",
  subheader: "Software Developer",
};

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
    name: "Places I've Traveled",
    component: <TravelContent />,
  },
  {
    name: "Photos",
    component: <PhotosContent />,
  },
];

export const socialBoxOptions = [
  { icon: "envelope", url: "mailto:sita.robinson@gmail.com" },
  { icon: "github", url: "https://github.com/pinkdragon1000" },
  { icon: "linkedin", url: "https://www.linkedin.com/in/sitarobinson/" },
];

export const footerData = "Ⓒ Sita Robinson 2020";
