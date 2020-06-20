import React, { Component } from "react";
import ProjectCard from "../project-card";
import { projectsContent } from "../../utils/app-utils";
class ProjectsContent extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {projectsContent.map((option, i) => (
            <ProjectCard
              key={i}
              title={option.title}
              description={option.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectsContent;
