import React from "react";
import { ProjectCard } from "../export-components";
import { array } from "../../utils/projects-content-utils";

class ProjectsContent extends React.Component {
  render() {
    return (
      <div>
        {array.map((option, i) => (
          <div className="row">
            <ProjectCard
              title={option.slice(0, 3)[0].title}
              description={option.slice(0, 3)[0].description}
            />
            <ProjectCard
              title={option.slice(0, 3)[1].title}
              description={option.slice(0, 3)[1].description}
            />
            <ProjectCard
              title={option.slice(0, 3)[2].title}
              description={option.slice(0, 3)[2].description}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectsContent;
