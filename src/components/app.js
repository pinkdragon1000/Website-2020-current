import React, { Component } from "react";
import "../index.css";
import Header from "./header";
import WelcomeContent from "./page-content/welcome-content";
import ExperienceContent from "./page-content/experience-content";
import ProjectsContent from "./page-content/projects-content";
import TravelContent from "./page-content/travel-content";
import PhotosContent from "./page-content/photos-content";
import Tabs from "./tabs";
import Footer from "./footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header
          imgdir="../me.png"
          header="Sita Robinson"
          subheader="Software Developer"
        />

        <Tabs>
          <div label="Welcome">
            <WelcomeContent />
          </div>
          <div label="Experience">
            <ExperienceContent />
          </div>
          <div label="Projects">
            <ProjectsContent />
          </div>

          <div label="Places I've Traveled">
            <TravelContent />
          </div>

          <div label="Photos">
            <PhotosContent />
          </div>
        </Tabs>

        <Footer label="Ⓒ Sita Robinson 2020" />
      </div>
    );
  }
}

export default App;
