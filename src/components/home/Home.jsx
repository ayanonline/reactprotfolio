import React from "react";
import "./Home.css";
import mypic from "../../assets/myPhoto.png";
import wpIcon from "../../assets/whatsapp.png";
import gmailIcon from "../../assets/gmail.png";
import linkedinIcon from "../../assets/linkedin.png";
import gitHubIcon from "../../assets/github.png";
import SocialBtn from "../socialbutton/SocialBtn";

function Home() {
  const socialItem = [
    { img: wpIcon, url: "https://wa.me/7477446714?text=" },
    { img: gmailIcon, url: "https://github.com/ayanonline" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/ayanonline/" },
    { img: gitHubIcon, url: "https://github.com/ayanonline" },
  ];
  return (
    <div className="home-container">
      <div className="intro">
        <h1>
          Hi 👋
          <br /> I'm Ayan Ghosh
        </h1>
        <p>
          I am very happy person. <br />A passionate Web developer from India.
        </p>

        <div className="social">
          {socialItem.map((item, index) => (
            <SocialBtn key={index} src={item.img} url={item.url} />
          ))}
        </div>
      </div>
      <div className="image">
        <img src={mypic} alt="this is my photo" />
      </div>
    </div>
  );
}

export default Home;
