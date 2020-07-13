import React from "react";
import { ProjectCard, SocialBox } from "../export-components";
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
              socialbox={
                <SocialBox
                  fill="var(--light-pink)"
                  options={option[0].socialBoxOptions}
                />
              }
            />
            {option[1] === undefined ? (
              ""
            ) : (
              <ProjectCard
                title={option[1].title}
                description={option[1].description}
                socialbox={
                  <SocialBox
                    fill="var(--light-pink)"
                    options={option[1].socialBoxOptions}
                  />
                }
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectsContent;
