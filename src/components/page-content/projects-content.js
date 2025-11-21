import React from "react";
import { ProjectCard, SocialBox } from "../export-components";
import { projectGroup } from "../../utils/projects-content-utils";

export default function ProjectsContent() {
  return (
    <div>
      {projectGroup.map((option, i) => (
        <div className="row" key={i + 200}>
          <ProjectCard
            title={option[0].title}
            description={option[0].description}
            socialbox={
              <SocialBox
                fill="var(--dark-purple)"
                options={option[0].socialBoxOptions}
                width={1.25}
                height={1.25}
                className="social-box"
              />
            }
          />
          {option[1] && (
            <ProjectCard
              title={option[1].title}
              description={option[1].description}
              socialbox={
                <SocialBox
                  fill="var(--dark-purple)"
                  options={option[1].socialBoxOptions}
                  width={1.25}
                  height={1.25}
                  className="social-box"
                />
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}
