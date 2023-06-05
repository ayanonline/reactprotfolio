import React, { useState } from "react";
import ProjectCard from "./projectCard/ProjectCard";
import desktop from "../assets/desktop.png";
import mobile from "../assets/mobile.png";
function Test() {
  const [project, setProject] = useState({
    title: "Project 1",
    desc: "this is project one sdfajsfd asdfa helooo ta  askdjfoya alsdjf asdfasdf fasdfj asdfasd asdflasdafsf asdfas asdflaskdjfkasdfj;aklsdf;a",
    desktopImage: desktop,
    mobileImage: mobile,
  });
  return (
    <div className="test">
      Test
      <ProjectCard project={project} />
    </div>
  );
}

export default Test;
