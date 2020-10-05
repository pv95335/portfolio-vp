import React from "react";
import "../Stylesheets/Style.css";

function Nav() {
  return (
    <header>
      <nav className="nav">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </nav>
    </header>
  );
}

export default Nav;
