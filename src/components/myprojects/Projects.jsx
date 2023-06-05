import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "../projectCard/ProjectCard";
import projects from "./projectsData";

function Projects() {
  return (
    <div className="recent-project">
      <div>
        <h2 className="r-heading">My projects</h2>
        <p className="r-heading">
          Projects which I build using tranding technologies
        </p>
      </div>
      <div className="p-div">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
