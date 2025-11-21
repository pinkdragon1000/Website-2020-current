import React from "react";
import { ProjectCard, SocialBox } from "../export-components";
import { testimonialGroup } from "../../utils/testimonial-utils";

export default function TestimonialContent() {
  return (
    <div>
      {testimonialGroup.map((option, i) => (
        <div className="row" key={i + 300}>
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
