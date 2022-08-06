import React from "react";
import { ProjectCard, SocialBox } from "../export-components";
import { testimonialGroup } from "../../utils/testimonial-utils";
import Style from "style-it";

class TestimonialContent extends React.Component {
  render() {
    const styles = `
    .row.center-container {
      position: absolute; 
      bottom: 1rem;
      left: 45%;
      right: 50%; 
    }
    `;
    return Style.it(
      `${styles}`,

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
                  width={20}
                  height={20}
                  className="social-box"
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
                    fill="var(--dark-purple)"
                    options={option[1].socialBoxOptions}
                    width={20}
                    height={20}
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
}

export default TestimonialContent;
