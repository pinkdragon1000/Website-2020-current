import React from "react";
import Style from "style-it";

export default function Header(props) {
  const styles = `
    .gradient-bg {
      padding: 2rem 1.5rem;
      min-width: 618px;
      background-image: radial-gradient(circle at 38% 55%, hsla(149,0%,62%,0.1) 0%, hsla(149,0%,62%,0.1) 23%,transparent 23%, transparent 78%,transparent 78%, transparent 100%),radial-gradient(circle at 34% 85%, hsla(149,0%,62%,0.1) 0%, hsla(149,0%,62%,0.1) 7%,transparent 7%, transparent 41%,transparent 41%, transparent 100%),radial-gradient(circle at 0% 36%, hsla(149,0%,62%,0.1) 0%, hsla(149,0%,62%,0.1) 2%,transparent 2%, transparent 59%,transparent 59%, transparent 100%),radial-gradient(circle at 42% 37%, hsla(149,0%,62%,0.1) 0%, hsla(149,0%,62%,0.1) 6%,transparent 6%, transparent 21%,transparent 21%, transparent 100%),radial-gradient(circle at 48% 39%, hsla(149,0%,62%,0.1) 0%, hsla(149,0%,62%,0.1) 8%,transparent 8%, transparent 90%,transparent 90%, transparent 100%), var(--gradient);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .profile-container {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 1rem;
    }

    .header-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      object-fit: cover;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .header {
      color: var(--white);
      font-size: 3rem;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      margin: 0;
      line-height: 1.1;
    }

    .subheader {
      font-weight: 400;
      color: var(--white);
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      margin: 0;
      max-width: 600px;
    }
  `;
  return Style.it(
    `${styles}`,
    <div className="gradient-bg">
      <div className="profile-container">
        <img className="header-img" src={props.imgdir} alt="Sita Robinson" />
        <div className="text-content">
          <h1 className="header">{props.header}</h1>
          <p className="subheader">{props.subheader}</p>
        </div>
      </div>
      {props.socialbox}
    </div>
  );
}
