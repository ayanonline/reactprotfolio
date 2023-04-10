import React from "react";
import "./ProjectCard.css";
function ProjectCard(props) {
  return (
    <div className="p-card">
      <div className="thbnail">
        <img src={props.img} alt="" />
        <span>{props.title}</span>
      </div>
      <button>More details</button>
    </div>
  );
}

export default ProjectCard;
