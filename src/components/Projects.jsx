import { Waypoint } from "react-waypoint";
import "../styles/Projects.css";
import data from "../assets/ProjectsArray.json";
import Projectscard from "./ProjectCard";

const Projects = ({ setPageLocation }) => {
  return (
    <>
      <div id="projects">
        <h2>Projects</h2>
        <Waypoint onEnter={() => setPageLocation("projects")} />
        <div className="listofprojects">
          {data.map((project) => (
            <Projectscard project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
