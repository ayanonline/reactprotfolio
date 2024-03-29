import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import menuIcon from "../../assets/menu.png";
import closeIcon from "../../assets/cancel.png";
function Header() {
  const [menuvisible, setMenuvisible] = useState(false);
  function clichHandle() {
    setMenuvisible((prev) => {
      return !prev;
    });
  }
  return (
    <Fragment>
      <div className="navbar">
        <div className="logo">
          <h3>Ayan Ghosh</h3>
        </div>
        <div className="nav-item">
          <ul className="nav-ul">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            {/* <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/blogs/rdjislove">BlogsAdmin</NavLink>
            </li> */}
          </ul>
          <NavLink to="/contact-me">
            <button className="btn">Contact me</button>
          </NavLink>
        </div>
        <div onClick={clichHandle} className="res-nav-item">
          {menuvisible ? (
            <img src={closeIcon} alt="icon" />
          ) : (
            <img src={menuIcon} alt="icon" />
          )}
        </div>
      </div>
      {menuvisible && (
        <div className="menu">
          <ul className="nav-ul">
            <li>
              <NavLink onClick={clichHandle} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={clichHandle} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={clichHandle} to="/skills">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink onClick={clichHandle} to="/Projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink onClick={clichHandle} to="/contact-me">
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}

export default Header;
