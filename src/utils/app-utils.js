import React from "react";
import WelcomeContent from "../components/page-content/welcome-content";
import ExperienceContent from "../components/page-content/experience-content";
import ProjectsContent from "../components/page-content/projects-content";
import TravelContent from "../components/page-content/travel-content";
import PhotosContent from "../components/page-content/photos-content";

export const headerData = {
  imgdir: "../me.png",
  header: "Sita Robinson",
  subheader: "Software Developer",
};

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

export const socialBoxOptions = [
  { icon: "envelope", url: "mailto:sita.robinson@gmail.com" },
  { icon: "github", url: "https://github.com/pinkdragon1000" },
  { icon: "linkedin", url: "https://www.linkedin.com/in/sitarobinson/" },
];

export const footerData = "Ⓒ Sita Robinson 2020";
