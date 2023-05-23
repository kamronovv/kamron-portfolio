import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../Images/logo.png";
import Sun from "../Images/sun.png";
import moon from "../Images/moon.png";

function Navbar() {
  return (
    <>
        <nav className="navbar">
          <a className="logo" href="#">
            <h1>Kamron<span>Dev</span></h1>
          </a>
          <ul className="center-ul">
            <li>
              <NavLink  to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/Aboute">Aboute</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
          <ul className="right-ul">      
            <NavLink to="/Hire-Me!">Hire Me!</NavLink>
            <a href="#">
              <img src={moon} />
            </a>
          </ul>
        </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
