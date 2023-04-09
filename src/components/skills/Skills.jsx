import React, { useState } from "react";
import "./Skills.css";
import Skiltemplate from "./Skiltemplate";
import mongoIcon from "../../assets/mongodb.png";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import htmIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import tailwindIcon from "../../assets/tailwind.png";
import jsIcon from "../../assets/js.png";
import javaIcon from "../../assets/java.png";
import expressIcon from "../../assets/express.png";
import cIcon from "../../assets/c.png";
function Skills() {
  const [mySkills, setMySkills] = useState([
    { icon: mongoIcon, name: "Mongodb" },
    { icon: expressIcon, name: "Express" },
    { icon: reactIcon, name: "React Js" },
    { icon: nodeIcon, name: "Node Js" },
    { icon: htmIcon, name: "Html" },
    { icon: cssIcon, name: "CSS" },
    { icon: tailwindIcon, name: "Tailwind CSS" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: javaIcon, name: "Java" },
    { icon: cIcon, name: "C" },
  ]);
  return (
    <div className="skill-container">
      <h1>My skills</h1>
      <div className="skills">
        {mySkills.map((skill, index) => {
          return (
            <Skiltemplate
              key={index}
              skillName={skill.name}
              skillIcon={skill.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
