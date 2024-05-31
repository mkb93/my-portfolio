export default function Projectscard({ project }) {
  const { img, title, description, live, code } = project;
  return (
    <div className="project">
      <img src={process.env.PUBLIC_URL + img} alt="" srcset="" />

      <div className="projecttext">
        <div>
          <p className="title">{title}</p>
          <p>{description}</p>
        </div>
        <div className="links-div">
          <a className="link" href={live} target="_blank">
            Live Demo
          </a>
          <a className="link" href={code} target="_blank">
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
