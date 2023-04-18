import React, { useState } from "react";
import "./RecentProjects.css";
import { NavLink } from "react-router-dom";
import ProjectCard from "../projectCard/ProjectCard";
import ecomsnap from "../../../assets/ecommerce.webp";
import moviesnap from "../../../assets/movie.webp";
import ytdownloadsnap from "../../../assets/ytdownload.webp";
function RecentProjects() {
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
          <ProjectCard
            key={index}
            img={project.image}
            title={project.title}
            url={project.url}
          />
        ))}
      </div>
      <NavLink to="/projects" id="view-all-skill">
        <button className="btn">view all projects</button>
      </NavLink>
    </div>
  );
}

export default RecentProjects;
