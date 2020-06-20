import React from "react";

import Card from "./components/card";
import "./index.css";

import Header from "./components/header";
import WelcomeContent from "./components/page-content/welcome-content";
import ExperienceContent from "./components/page-content/experience-content";
import ProjectsContent from "./components/page-content/projects-content";
import Tabs from "./components/tabs";
function App() {
  return (
    <div className="App">
      <Header
        imgdir="../me.png"
        header="Sita Robinson"
        subheader="Software Developer"
      />

      <Tabs>
        <div label="Welcome">
          <Card>
            <WelcomeContent />
          </Card>
        </div>
        <div label="Experience">
          <Card>
            <ExperienceContent />
          </Card>
        </div>
        <div label="Projects">
          <Card>
            <ProjectsContent />
          </Card>
        </div>

        <div label="Places I've Traveled">
          <Card></Card>
        </div>

        <div label="Photos"></div>
      </Tabs>

      <div className="footer">Ⓒ Sita Robinson 2020</div>
    </div>
  );
}

export default App;
