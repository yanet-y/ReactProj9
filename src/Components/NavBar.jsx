import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand text-black" to="/">
          Company Name
        </Link>

        <div className="container d-flex justify-content-end">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-info fw-bold" : "nav-link text-dark"
              }
              to="/features"
            >
              Features
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-info fw-bold" : "nav-link text-dark"
              }
              to="/enterprise"
            >
              Enterprise
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-info fw-bold" : "nav-link text-dark"
              }
              to="/support"
            >
              Support
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-info fw-bold" : "nav-link text-dark"
              }
              to="/"
            >
              Home
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
