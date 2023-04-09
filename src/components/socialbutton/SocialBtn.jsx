import React, { Fragment } from "react";
import "./SocialBtn.css";
function SocialBtn(props) {
  return (
    <Fragment>
      <a href={props.url} target="_blank">
        <div className="social-btn">
          <img src={props.src} alt="This is button" />
        </div>
      </a>
    </Fragment>
  );
}

export default SocialBtn;
