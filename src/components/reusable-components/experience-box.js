import React from "react";
import Style from "style-it";
import { WhiteCard } from "../export-components";

export default function ExperienceBox(props) {
  const styles = `
    .experience-box {
      margin-bottom: 1.5rem;
      display: flex;
      gap: 1rem;
      position: relative;
    }

    .experience-icon-container {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .experience-content {
      flex: 1;
      min-width: 0;
    }

    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 1rem;
      margin-bottom: 0.25rem;
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

    .role-entry {
      margin-bottom: 1.5rem;
    }

    .role-entry:last-child {
      margin-bottom: 0;
    }
    `;
  
  return Style.it(
    `${styles}`,
    <WhiteCard className="experience-box">
      <div className="experience-icon-container">
        <div className="company-logo">
          {props.logo ? (
            <img src={props.logo} alt={props.linktext} />
          ) : (
            <div style={{ 
              width: '100%', 
              height: '100%', 
              background: 'var(--light-purple)', 
              color: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}>
              {props.linktext ? props.linktext.charAt(0).toUpperCase() : '•'}
            </div>
          )}
        </div>
      </div>
      <div className="experience-content">
        <div className="experience-header">
          <div>
            {props.link && <a href={props.link} className="experience-link">{props.linktext}</a>}
          </div>
        </div>
        {props.roles.map((role, index) => (
          <div key={index} className="role-entry">
            <h3>{role.title}</h3>
            <p className="experience-date">{role.date}</p>
            <ul className="experience-details">{role.description}</ul>
          </div>
        ))}
      </div>
    </WhiteCard>
  );
}
