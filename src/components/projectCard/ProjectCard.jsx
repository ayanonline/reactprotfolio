import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="Project-card">
      <div
        className="frame"
        style={{
          backgroundImage: `url(${project?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="about-project">
        <h2>{project?.title}</h2>
        <p>{project?.desc}</p>
      </div>
      <a className="btn" href={project?.link} target="_blank">
        SEE LIVE
      </a>
    </div>
  );
}

export default ProjectCard;
