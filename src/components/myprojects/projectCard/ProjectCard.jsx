import React from "react";
import "./ProjectCard.css";
function ProjectCard(props) {
  return (
    <div className="p-card">
      <div className="thbnail">
        <img className="card-img" src={props.img} alt="" />
        <div className="overlay">{props.title}</div>
      </div>
      <button className="btn">More details</button>
    </div>
  );
}

export default ProjectCard;
