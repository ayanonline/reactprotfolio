import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import loacationIcon from "../../assets/location.png";
import callIcon from "../../assets/call.png";
import gmailIcon from "../../assets/gmail.png";
import wpIcon from "../../assets/whatsapp.png";
import linkedinIcon from "../../assets/linkedin.png";
import gitHubIcon from "../../assets/github.png";
function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <div className="inner-left">
          <img src={loacationIcon} alt="an Image" className="ficon" />
          <div>
            <p>Porabazar, Hooghly</p>
            <h3>Kolkata, WestBengal</h3>
          </div>
        </div>
        <div className="inner-left">
          <img src={callIcon} alt="an Image" className="ficon" />
          <div>
            <h3>+91 7477446714</h3>
          </div>
        </div>
        <div className="inner-left">
          <img src={gmailIcon} alt="an image" className="ficon" />
          <div>
            <h3>ayanghosh1389@gmail.com</h3>
          </div>
        </div>
      </div>
      <div className="right">
        <div>
          <h2>I am Ayan Ghosh</h2>
          <p>A passionate Web developer from India. </p>
        </div>
        <div className="follow">
          <a href="https://wa.me/7477446714?text=">
            <img src={wpIcon} alt="an image" className="ficon" />
          </a>
          <a href="https://github.com/ayanonline">
            <img src={gitHubIcon} alt="an image" className="ficon" />
          </a>
          <a href="https://www.linkedin.com/in/ayanonline/">
            <img src={linkedinIcon} alt="an image" className="ficon" />
          </a>
          <Link to="/contact-me" className="btn">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
