import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./projectCard/ProjectCard";
import ecomsnap from "../../assets/ecommerce.webp";
import moviesnap from "../../assets/movie.webp";
import todosnap from "../../assets/todoApp.webp";
import librarysnap from "../../assets/library.webp";
import keepersnap from "../../assets/keeperApp.webp";
import ytdownloadsnap from "../../assets/ytdownload.webp";

function Projects() {
  const [projects, setProjects] = useState([
    {
      url: "#",
      image: ecomsnap,
      title: "E-commerce(mern)",
      details: [],
    },
    {
      url: "https://yt-download-ayan.netlify.app/",
      image: ytdownloadsnap,
      title: "Youtube video downloder (React js)",
      details: [],
    },
    {
      url: "https://ayan-movie.netlify.app/",
      image: moviesnap,
      title: "Movie search (React js)",
      details: [],
    },
    {
      url: "https://ayan-todo-list.netlify.app/",
      image: todosnap,
      title: "TodoApp (React js)",
      details: [],
    },
    {
      url: "https://library-ayan.netlify.app/",
      image: librarysnap,
      title: "Library (React Redux)",
      details: [],
    },
    {
      url: "https://ayan-keeper.netlify.app/",
      image: keepersnap,
      title: "KeeperApp (React js)",
      details: [],
    },
  ]);
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
          <ProjectCard
            key={index}
            img={project.image}
            title={project.title}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
