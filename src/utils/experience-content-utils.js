//This file contains the content used for the experience section of the application (education, work/volunteer experience).  Rendered in experience-content.js.

import React from "react";

export const educationContent = [
  {
    school: "University of Maryland",
    degree: "MBA",
    year: "Class of 2026",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHrhLnmmZTGjQ/company-logo_100_100/company-logo_100_100/0/1631303360671?e=1765411200&v=beta&t=1dAvgtHyfbujCWCQRp_4y14eIpCn-d9SpnPAxXedOpQ",
  },
  {
    school: "Drexel University",
    degree: "BS in Data Science, Minor in Computer Science",
    year: "Graduated June 2020",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQEqp_nXWmHi6Q/company-logo_100_100/company-logo_100_100/0/1631320003902?e=1765411200&v=beta&t=Q_Pg89pWZAQk6GacYnjdtwK4BCKufsudr2L0EIhjjpc",
  },
];

export const experienceHeader = ["Work Experience", "Volunteer Experience"];

export const workExperienceContent = [
  {
    title: "Software Engineer, 3 (Lead)",
    date: "Dec 15, 2024 - Present",
    link: "https://www.boozallen.com/",
    linktext: "Booz Allen Hamilton",
    logo: "https://specials-images.forbesimg.com/dam/imageserve/68c2ce4531e774b4ac3928cc/400x0.png?cropX1=0&cropX2=700&cropY1=0&cropY2=700",
    description: null,
  },
  {
    title: "Software Engineer, 2 (Staff)",
    date: "July 6, 2022 - Dec 15, 2024",
    link: "https://www.boozallen.com/",
    linktext: "Booz Allen Hamilton",
    logo: "https://specials-images.forbesimg.com/dam/imageserve/68c2ce4531e774b4ac3928cc/400x0.png?cropX1=0&cropX2=700&cropY1=0&cropY2=700",
    description: (
      <div>
        <li>Developed frontend for the Recreation.gov customer and administrative applications using React and Redux. Recreation.gov is an e-commerce web application
          that allows you to plan trips across the United States, including federally managed parks, forests, monuments, and waterways.</li>
        <li>Worked across the project to develop new features, fixed bugs in the application, performed unit and integration testing using React Testing Library, and deployed
          the app using ArgoCD. Handle service calls from Go APIs using Axios and Redux. Handle rollouts using LaunchDarkly flags. Implemented and updated features
          using Figma mockups from the design team.</li>
        <li>Worked with a mixture of functional and class components.</li>
        <li>Styled components using SCSS</li>
      </div>
    ),
  },
  {
    title: "Software Developer II",
    date: "February 4, 2022 - June 17, 2022",
    link: "https://investor.vanguard.com/corporate-portal/",
    linktext: "Vanguard",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGlBCOzS6Gl9g/company-logo_100_100/company-logo_100_100/0/1635426872299/vanguard_logo?e=1765411200&v=beta&t=pJ_2CH-8KmIusOQoC1LqST9Gsu37vgCG-doyVuQMZm4",
    description: (
      <div>
        <li>Refer to Software Dev I description below.</li>
      </div>
    ),
  },
  {
    title: "Software Developer I",
    date: "July 13, 2020 - February 4, 2022",
    link: "https://investor.vanguard.com/corporate-portal/",
    linktext: "Vanguard",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGlBCOzS6Gl9g/company-logo_100_100/company-logo_100_100/0/1635426872299/vanguard_logo?e=1765411200&v=beta&t=pJ_2CH-8KmIusOQoC1LqST9Gsu37vgCG-doyVuQMZm4",
    description: (
      <div>
        <li>
          Developed Java Spring web services that power the Vanguard mobile and web
          customer-facing investment platform.
        </li>
        <li>
          Worked with team to migrate web services from Pivotal Cloud Foundry to Amazon
          (AWS) ECS.
        </li>
        <li>
          Performed unit and integration testing using the Junit, Mockito, and Cucumber
          frameworks.
        </li>
        <li>
          Provided developer support for consumers of our web services. Analyzed web
          service logs using Splunk and Honeycomb.
        </li>
        <li>
          Worked in a DevOps environment developing, deploying, supporting and
          troubleshooting our web-services in a production environment.
        </li>
      </div>
    ),
  },
  {
    title: "Data Science Teaching Assistant",
    date: "April 6, 2020 - June 11, 2020",
    link: "https://drexel.edu/cci/",
    linktext: "Drexel University College of Computing and Informatics",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFqvnZteBtYDA/company-logo_100_100/company-logo_100_100/0/1721842454220/drexel_university_college_of_computing_informatics_logo?e=1765411200&v=beta&t=MHl81owJa2_PRm1HJtDTET_ZbD9eJ0FFi3eLOkLyI5w",
    description: (
      <div>
        <li>
          Held office hours for 5 hours a week to answer questions about assignments in a
          number of topics including Python basics and libraries for data analysis (numpy,
          pandas, and matplotlib){" "}
        </li>
        <li>Graded assignments and provided feedback</li>
      </div>
    ),
  },

  {
    title: "Data Science Co-op",
    date: "September 24, 2018 - March 20, 2019",
    link: "https://www.elapservices.com/",
    linktext: "ELAP Services",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHJDXSlq8T81A/company-logo_200_200/company-logo_200_200/0/1642561819392/imagine_360_health_logo?e=1765411200&v=beta&t=b_6cnvfRP3AwfpFxIydJ7IoibAU-kc_NCARijzIMwDY",
    description: (
      <div>
        <li>Developed a machine learning model to predict customer churn.</li>
        <li> Leveraged Python packages including Pandas.</li>
        <li>
          Used the Microsoft R package MicrosoftML to construct fast forest, decision
          trees, decision forests, and logistic regression models. Used d3.js for
          visualization.
        </li>
        <li>Preprocessed and transformed healthcare data using Python and R. </li>
        <li>Developed tools in Python for streamlining ETL processes.</li>
        <li>Presented at a machine learning workshop on a bi-weekly basis</li>
        <li>Developed data visualizations using Tableau.</li>
      </div>
    ),
  },
  {
    title: "Software Engineering Intern",
    date: "June 19, 2017 - August 25, 2017",
    link: "https://corporate.comcast.com/",
    linktext: "Comcast",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEZqcKKlfKeXQ/company-logo_100_100/company-logo_100_100/0/1710183636200/comcast_logo?e=1765411200&v=beta&t=j4OoExj542yLhXwRyEKYraUq11Z8WDtDqA1uTUYwuPI",
    description: (
      <div>
        <li>
          Developed and enhanced a web-based system used to manage operational IP video
          delivery infrastructure.
        </li>
        <li>Backend development using Ruby on Rails with MySQL.</li>
        <li>
          Participated in Comcast's Agile software development processes and lifecycle.
        </li>
      </div>
    ),
  },
];

export const volunteerExperienceContent = [
  {
    title: "President of Women in Computing Society",
    date: "June 18, 2019 - June 11, 2020 (1 school year)",
    link: "http://drexelwics.acm.org/index.html",
    linktext: "Women in Computing Society (WiCS)",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQH6sNXRfgZ7bw/company-logo_100_100/company-logo_100_100/0/1630586996691/drexel_wics_logo?e=1765411200&v=beta&t=_k2BhfzkWJmK8UYPKMMc9NzLbjRnqiAXnLIf65LVjRI",
    description: (
      <div>
        <li>
          Planned and moderated 30+ events including tech talks, panels, and social
          events.
        </li>
        <li> Helped bring in more than $2000 in sponsorship</li>
        <li> Built relationships with members and managed other officers </li>
        <li>
          Applied for conference funding and registered WiCS members for the ACM Capital
          Region Celebration of Women in Computing (CAPWIC) 2020 conference. Later
          cancelled due to COVID.
        </li>
      </div>
    ),
  },
  {
    title: "Treasurer of Women in Computing Society",
    date: "January 22, 2018 to June 17, 2019 (2 school years)",
    link: "http://drexelwics.acm.org/index.html",
    linktext: "Women in Computing Society (WiCS)",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQH6sNXRfgZ7bw/company-logo_100_100/company-logo_100_100/0/1630586996691/drexel_wics_logo?e=1765411200&v=beta&t=_k2BhfzkWJmK8UYPKMMc9NzLbjRnqiAXnLIf65LVjRI",
    description: (
      <div>
        <li>
          Kept records of all transactions/deposits in accounts, managed the budget,
          reported the financial situation to other officers. Put in purchase requests for
          items to be purchased out of accounts.
        </li>
        <li>
          Applied for funding through various sources via fundraisers and grants. Applied
          for conference funding and registered WiCS members for the ACM Philadelphia
          Region Celebration of Women in Computing (PHICWIC) 2018 conference and also for
          the ACM CAPWIC 2019 conference.
        </li>
        <li>
          Led a fundraising committee of five WiCS members who assisted in compiling
          corporate sponsorship contacts and also helped with pr for fundraisers. We
          brought in more than $200 from fundraisers.
        </li>
      </div>
    ),
  },
];
