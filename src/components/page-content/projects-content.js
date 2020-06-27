import React from "react";
import { ProjectCard } from "../export-components";
import { projectGroup } from "../../utils/projects-content-utils";

class ProjectsContent extends React.Component {
  render() {
    return (
      <div>
        {projectGroup.map((option, i) => (
          <div className="row">
            <ProjectCard
              title={option[0].title}
              description={option[0].description}
            />
            {option[1] === undefined ? (
              ""
            ) : (
              <ProjectCard
                title={option[1].title}
                description={option[1].description}
              />
            )}
            {option[2] === undefined ? (
              ""
            ) : (
              <ProjectCard
                title={option[2].title}
                description={option[2].description}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectsContent;
