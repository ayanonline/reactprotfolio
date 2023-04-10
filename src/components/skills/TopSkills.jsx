import React, { useState } from "react";
import mongoIcon from "../../assets/mongodb.png";
import expressIcon from "../../assets/express.png";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import Skiltemplate from "../skills/Skiltemplate";
import { NavLink } from "react-router-dom";

function TopSkills() {
  const [mySkills, setMySkills] = useState([
    { icon: mongoIcon, name: "Mongodb" },
    { icon: expressIcon, name: "Express" },
    { icon: reactIcon, name: "React Js" },
    { icon: nodeIcon, name: "Node Js" },
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
        <NavLink to="/skills">view all skills</NavLink>
      </div>
    </div>
  );
}

export default TopSkills;
