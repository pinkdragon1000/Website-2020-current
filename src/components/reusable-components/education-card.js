import React from "react";
import Style from "style-it";

export default function EducationCard(props) {
    const styles = `
    .education-card {
      display: flex;
      width: 400rem;
      margin: 1rem 0;
      background: var(--white);
      border-radius: 2rem;
      box-shadow: 0.125rem 0.125rem 0.1875rem var(--med-grey);
      align-items: center;
    }

    .education-logo {
      flex-shrink: 0;
      width: 9.375rem;
      height: 9.375rem;
      object-fit: cover;
      object-position: center;
      padding: 1rem;
      background: var(--white);
      border-radius: 2rem;
    }

    .school {
      font-weight: bold;
      font-size: 1.5rem;
      margin: 0;
    }

    .degree {
      font-size: 1rem;
      margin: 0.3rem 0;
    }

    .year {
      color: var(--dark-grey);
      font-weight: 400;
      font-size: 1.1rem;
      margin: 0.3rem 0;
    }
  `;

    return Style.it(
        `${styles}`,
        <div className="education-card">
            <img
                src={props.logo}
                alt={`${props.school} logo`}
                className="education-logo"
            />
            <div className="education-content">
                <h3 className="school">{props.school}</h3>
                <p className="degree">{props.degree}</p>
                <p className="year">{props.year}</p>
            </div>
        </div>
    );
}
