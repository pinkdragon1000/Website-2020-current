import React from "react";
import Style from "style-it";
import { WhiteCard, Stack } from "../export-components";

export default function ExperienceBox(props) {
  const styles = `
    .experience-box {
      display: flex;
      gap: 1.5rem;
      position: relative;
    }

    .experience-icon-container {
      flex-direction: column;
      position: relative;
    }

    .experience-content {
      flex: 1;
      min-width: 0;
    }

    .experience-link {
      color: var(--light-purple);
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
      white-space: nowrap;
    }

    .experience-link:hover {
      text-decoration: underline;
    }

    .experience-date {
      color: var(--dark-grey);
      font-weight: 400;
      font-size: 1rem;
      margin: 0.25rem 0 0.75rem 0;
    }

    .experience-details {
      margin: 0;
      padding-left: 1.25rem;
    }

    .experience-details li {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
    `;

  return Style.it(
    `${styles}`,
    <WhiteCard className="experience-box">
      <div className="experience-icon-container flex-center-no-justify flex-shrink-0">
        <div className="company-logo">
          {props.logo ? (
            <img src={props.logo} alt={props.linktext} />
          ) : (
            <div className="flex-center-no-justify" style={{
              width: '100%',
              height: '100%',
              background: 'var(--light-purple)',
              color: 'var(--white)',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}>
              {props.linktext ? props.linktext.charAt(0).toUpperCase() : '•'}
            </div>
          )}
        </div>
      </div>
      <div className="experience-content">
        {props.link && <a href={props.link} className="experience-link">{props.linktext}</a>}
        <Stack spacing="large">
          {props.roles.map((role, index) => (
            <div key={index}>
              <h3>{role.title}</h3>
              <p className="experience-date">{role.date}</p>
              <ul className="experience-details">{role.description}</ul>
            </div>
          ))}
        </Stack>
      </div>
    </WhiteCard>
  );
}
