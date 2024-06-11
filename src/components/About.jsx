import { Waypoint } from "react-waypoint";
import "../styles/About.css";

const About = ({ setPageLocation }) => {
  return (
    <>
      <div id="about">
        <h3>About</h3>
        <p>
          I am a full stack Developer, who started my coding journey from
          learning the classic HTML, CSS, JAVASCRIPT whilst working as a muay
          thai coach. After some careful consideration. I decided to change
          career and go into software engineering. I did the Makers Bootcamp
          which showed me how large and diverse the software and technology
          industry is. I look foward to learning more and am constantly working
          on myself and different projects to learn more and improve myself.
        </p>
        <p></p>
        <Waypoint onEnter={() => setPageLocation("about")} />
        <h3>My Skill Set</h3>
        <div>
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/html%20-%23150458.svg?&style=for-the-badge&logo=html&logoColor=white"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/CSS%20-%23F37626.svg?&style=for-the-badge&logo=CSS&logoColor=white"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/JavaScript-ED8B00?style=for-the-badge&logo=javascript&logoColor=white"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/MongoDB-14354C?style=for-the-badge&logo=mongodb&logoColor=white"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/PostgreSQL-00000F?style=for-the-badge&logo=postgresql&logoColor=white"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/React-00599C?style=for-the-badge&logo=react&logoColor=white"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/typescript%20-%23013243.svg?&style=for-the-badge&logo=typescript&logoColor=white"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
          />
          <img
            className="p-1"
            alt="logo"
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
          />
        </div>
      </div>
    </>
  );
};

export default About;
