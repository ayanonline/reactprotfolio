import React, { Fragment, useState } from "react";
import "./Home.css";
import mypic from "../../assets/about.webp";
import wpIcon from "../../assets/whatsapp.png";
import gmailIcon from "../../assets/gmail.png";
import linkedinIcon from "../../assets/linkedin.png";
import gitHubIcon from "../../assets/github.png";
import SocialBtn from "../socialbutton/SocialBtn";
import RecentProjects from "../myprojects/recentProjects/RecentProjects";
import TopSkills from "../skills/TopSkills";
import About from "../about/About";
import Contact from "../contact/Contact";

function Home() {
  const socialItem = [
    { img: wpIcon, url: "https://wa.me/7477446714?text=" },
    { img: gmailIcon, url: "ayanghosh1389@gmail.com" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/ayanonline/" },
    { img: gitHubIcon, url: "https://github.com/ayanonline" },
  ];

  return (
    <Fragment>
      <div className="home-container">
        <div className="image">
          <img src={mypic} alt="this is my photo" />
        </div>

        <div className="intro">
          <h1>Hi 👋</h1>
          <h1>I am Ayan Ghosh</h1>
          <p>
            I am very happy person. <br />A passionate Web developer from India.
          </p>
          <div className="social">
            {socialItem.map((item, index) => (
              <SocialBtn key={index} src={item.img} url={item.url} />
            ))}
          </div>
        </div>
      </div>
      <RecentProjects />
      <TopSkills />
      <About />
    </Fragment>
  );
}

export default Home;
