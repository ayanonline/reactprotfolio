import React from "react";
import "./About.css";
import ARCIcon from "../../assets/arc.webp";
import mypic from "../../assets/about.webp";
import UniversityIcon from "../../assets/university.webp";
function About() {
  return (
    <div className="about-container">
      <h2>About me</h2>
      <div className="about-container1">
        <div className="imgae-div">
          <img src={mypic} alt="this is an image" />
        </div>
        <div className="text-div">
          <div>
            <h3>Experience:</h3>
            <div className="exp">
              <img className="icon" src={ARCIcon} alt="An image" />
              <div>
                <p>
                  <b>Intern</b>
                  <br />
                  <b>ARC Document Solutions India Private Limited</b>
                  <br />
                  Nov 2021 - Jun 2022 .8 months
                  <br />
                  Kolkata, West Bengal, India
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>Education:</h3>
            <div className="edu">
              <div className="masters">
                <img className="icon" src={UniversityIcon} alt="an image" />
                <div>
                  <h3>Brainware University</h3>
                  <p>
                    <b>MCA</b>
                    <br />
                    Aug 2022 - Aug 2024
                  </p>
                </div>
              </div>
              <div className="graduation">
                <img className="icon" src={UniversityIcon} alt="an image" />
                <div>
                  <h3>Brainware University</h3>
                  <p>
                    <b>BCA</b>
                    <br />
                    2019 - 2022
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="address">
            <p>
              <b>Address:</b> Hooghly, West Bengal, India
              <br />
              <b>Phone No:</b> 7477446714
              <br />
              <b>Email:</b> ayanghosh.dev@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
