import { Waypoint } from "react-waypoint";
import "../styles/Main.css";

const Main = ({ setPageLocation }) => {
  return (
    <>
      <div id="main">
        <h1 className="name">Adam Belahouane</h1>

        <h3 className="subname">Full Stack Developer</h3>
        <a className="linktoprojects" href="#projects">
          Have a look at my projects
        </a>
        <Waypoint onEnter={() => setPageLocation("home")} />
      </div>
    </>
  );
};

export default Main;
