import React from "react";
import "./Skills.css";

function Skiltemplate(props) {
  return (
    <div className="skill-item">
      <img src={props.skillIcon} alt="an image" />
      <p>{props.skillName}</p>
    </div>
  );
}

export default Skiltemplate;
