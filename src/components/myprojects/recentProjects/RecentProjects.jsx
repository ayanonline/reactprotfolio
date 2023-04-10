import React, { useState } from "react";
import "./RecentProjects.css";
import ProjectCard from "../projectCard/ProjectCard";
import ecomsnap from "../../../assets/ecommerce.webp";
import moviesnap from "../../../assets/movie.webp";
import todosnap from "../../../assets/todoApp.webp";
function RecentProjects() {
  const [projects, setProjects] = useState([
    {
      image: ecomsnap,
      title: "E-commerce(mern)",
      details: [],
    },
    {
      image: moviesnap,
      title: "Movie search (React js)",
      details: [],
    },
    {
      image: todosnap,
      title: "TodoApp (React js)",
      details: [],
    },
  ]);
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
          <ProjectCard key={index} img={project.image} title={project.title} />
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
