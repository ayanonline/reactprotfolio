import React, { Fragment, useState } from "react";
import "./Home.css";
import mypic from "../../assets/myPhoto.png";
import mypic2 from "../../assets/about.png";
import wpIcon from "../../assets/whatsapp.png";
import gmailIcon from "../../assets/gmail.png";
import linkedinIcon from "../../assets/linkedin.png";
import gitHubIcon from "../../assets/github.png";
import SocialBtn from "../socialbutton/SocialBtn";
import RecentProjects from "../myprojects/recentProjects/RecentProjects";
import TopSkills from "../skills/TopSkills";
import Typewriter from "typewriter-effect";

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
          <img src={mypic2} alt="this is my photo" />
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
    </Fragment>
  );
}

export default Home;
