import React, { useState } from "react";
import "./RecentProjects.css";
import { NavLink } from "react-router-dom";
import ProjectCard from "../../projectCard/ProjectCard";
import projects from "../projectsData";

function RecentProjects() {
  return (
    <div className="recent-project">
      <div>
        <h2 className="r-heading">Recent projects</h2>
        <p className="r-heading">
          Some recent projects which I build using tranding technologies
        </p>
      </div>
      <div className="p-div">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <NavLink to="/projects" id="view-all-skill">
        <button className="btn">view all projects</button>
      </NavLink>
    </div>
  );
}

export default RecentProjects;
