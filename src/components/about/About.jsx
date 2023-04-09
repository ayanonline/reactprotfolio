import React from "react";
import "./About.css";
import ARCIcon from "../../assets/arc.jpg";
import aboutImage from "../../assets/about.png";
import UniversityIcon from "../../assets/university.jpg";
function About() {
  return (
    <div className="about-container">
      <h2>About me</h2>
      <div className="about-container1">
        <div className="imgae-div">
          <img src={aboutImage} alt="this is an image" />
        </div>
        <div className="text-div">
          <div>
            <h3>Experience:</h3>
            <div className="exp">
              <img className="icon" src={ARCIcon} alt="An image" />
              <div>
                <p>
                  Intern
                  <br />
                  ARC Document Solutions India Private Limited <br />
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
                    MCA
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
                    BCA
                    <br />
                    2019 - 2022
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="address">
            <p>
              Address: Hooghly, West Bengal, India
              <br />
              Phone No: 7477446714
              <br />
              Email: ayanghosh1389@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
