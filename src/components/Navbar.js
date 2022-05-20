import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarItems = (
    <ul className="navbar-navigaton-container">
      <li className="navbar-navigaton-item">
        <NavLink
          className={(navData) =>
            navData.isActive ? "is-active-link link" : "link"
          }
          to="/"
        >
          ME
        </NavLink>
      </li>
      <li className="navbar-navigaton-item">
        <NavLink
          className={(navData) =>
            navData.isActive ? "is-active-link link" : "link"
          }
          to="/projects"
        >
          PROJECTS
        </NavLink>
      </li>
      <li className="navbar-navigaton-item">
        <NavLink
          className={(navData) =>
            navData.isActive ? "is-active-link link" : "link"
          }
          to="/awards"
        >
          AWARDS
        </NavLink>
      </li>
      <li className="navbar-navigaton-item">
        <NavLink
          className={(navData) =>
            navData.isActive ? "is-active-link link" : "link"
          }
          to="/whyme"
        >
          WHY ME?
        </NavLink>
      </li>
      <li className="navbar-navigaton-item">
        <NavLink
          className={(navData) =>
            navData.isActive ? "is-active-link link" : "link"
          }
          to="/letstalk"
        >
          LET'S TALK
        </NavLink>
      </li>
      <li className="navbar-navigaton-item">
        <NavLink
          className={(navData) =>
            navData.isActive ? "is-active-link link" : "link"
          }
          to="/classes"
        >
          CLASSES
        </NavLink>
      </li>
    </ul>
  );
  return (
    <>
      <nav className="navbar-container navbar-desktop">
        <div className="navbar-logo-container">
          <h1>
            <NavLink
              to="/admin"
              style={{ textDecoration: "none", color: "black" }}
            >
              LP
            </NavLink>
          </h1>
        </div>
        {navbarItems}
      </nav>
      <nav className="navbar-container navbar-mobile">
        <MenuIcon
          fontSize="large"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        {mobileMenuOpen && navbarItems}
      </nav>
    </>
  );
}
