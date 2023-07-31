import React, { useState } from "react";
import "./Nav.scss";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
   
      <div className="menu">
      <nav className="large-screen">
          <ul>
            <li style={{ marginRight: "20rem" }}>
              <a href="#abouts" className="aboutClass">Nikita Kharya</a>
            </li>
            <li style={{ marginRight: "8rem" }}>
              <a href="#experiences">Experience</a>
            </li>
            <li style={{ marginRight: "8rem" }} >
              <a href="#skill">Skills</a>
            </li>
            <li style={{ marginRight: "8rem" }}>
              <a href="#personals">Personal</a>
            </li>
            <li style={{ marginRight: "8rem" }}>
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </nav>
        <nav className="small-screen-nav">
          <div className="logo">
            <a href="#abouts">Nikita Kharya</a>
          </div>
          <div className={`menu-icon ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span className={showMenu ? "show" : "hide"}></span>
          </div>
          <ul className={`menu-items ${showMenu ? "show" : ""}`}>
            <li>
                <a href="#experiences" onClick={toggleMenu}>
                  Experience
                </a>
              </li>
            <li>
              <a href="#skill" onClick={toggleMenu}>
                Skills
              </a>
            </li>
           
            <li>
              <a href="#personals" onClick={toggleMenu}>
                Personal
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
  
  );
};
