import React, { Component } from "react";
import "./index.css";
import Header from "./components/header";
import WelcomeContent from "./components/page-content/welcome-content";
import ExperienceContent from "./components/page-content/experience-content";
import ProjectsContent from "./components/page-content/projects-content";
import Tabs from "./components/tabs";
import TravelContent from "./components/page-content/travel-content";

class App extends Component {
  render() {
    return (
      <div className="App">
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
            <TravelContent />
          </div>
        </Tabs>

        <div className="footer">Ⓒ Sita Robinson 2020</div>
      </div>
    );
  }
}

export default App;
