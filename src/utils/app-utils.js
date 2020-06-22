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
