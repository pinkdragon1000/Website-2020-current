import React from "react";
import { ProjectCard } from "../export-components";
import { projectsContent, array } from "../../utils/projects-content-utils";

class ProjectsContent extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <ProjectCard
            title={array[0][0].title}
            description={array[0][0].description}
          />
          <ProjectCard
            title={array[0][1].title}
            description={array[0][1].description}
          />
          <ProjectCard
            title={array[0][2].title}
            description={array[0][2].description}
          />
        </div>

        <div className="row">
          <ProjectCard
            title={array[1][0].title}
            description={array[1][0].description}
          />
          <ProjectCard
            title={array[1][1].title}
            description={array[1][1].description}
          />
          <ProjectCard
            title={array[1][2].title}
            description={array[1][2].description}
          />
        </div>
        <div className="row">
          <ProjectCard
            title={array[2][0].title}
            description={array[2][0].description}
          />
          <ProjectCard
            title={array[2][1].title}
            description={array[2][1].description}
          />
          <ProjectCard
            title={array[2][2].title}
            description={array[2][2].description}
          />
        </div>
        <div className="row">
          <ProjectCard
            title={array[3][0].title}
            description={array[3][0].description}
          />
          <ProjectCard
            title={array[3][1].title}
            description={array[3][1].description}
          />
          <ProjectCard
            title={array[3][2].title}
            description={array[3][2].description}
          />
        </div>
        <div className="row">
          <ProjectCard
            title={array[4][0].title}
            description={array[4][0].description}
          />
        </div>
      </div>
    );
  }
}

export default ProjectsContent;
//{console.log(arraycp[0][1].title)}
