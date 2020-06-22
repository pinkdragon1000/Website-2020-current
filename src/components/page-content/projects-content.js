import React, { Component } from "react";
import ProjectCard from "../project-card";
import ProjRow from "../project-row";
import { projectsContent } from "../../utils/projects-content-utils";

class ProjectsContent extends Component {
  render() {
    return (
      <div>
        {projectsContent.map((option, i) => (
          <ProjRow index={i}>
            <ProjectCard
              key={i}
              title={option.title}
              description={option.description}
            />
          </ProjRow>
        ))}
      </div>
    );
  }
}

export default ProjectsContent;
