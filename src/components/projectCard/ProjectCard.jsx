import React from "react";
import "./ProjectCard.css";
import desktopFrame from "../../assets/desktopframe.png";
import phoneFrame from "../../assets/phoneframe.png";
import desktop from "../../assets/desktop.png";
import mobile from "../../assets/mobile.png";

function ProjectCard({ project }) {
  return (
    <div className="Project-card">
      <div className="frame">
        <div
          className="desktop-frame"
          style={{
            backgroundImage: `url(${desktopFrame})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <img id="desktop-image" src={project?.desktopImage} alt="desktop" />
        </div>
        <div
          className="mobile-frame"
          style={{
            backgroundImage: `url(${phoneFrame})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <img id="mobile-image" src={project?.mobileImage} alt="mobile" />
        </div>
      </div>
      <div className="about-project">
        <h2>{project?.title}</h2>
        <p>{project?.desc}</p>
      </div>
      <a className="btn" href={project.link} target="_blank">
        SEE LIVE
      </a>
    </div>
  );
}

export default ProjectCard;
