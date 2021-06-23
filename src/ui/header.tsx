/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "cirrus-ui";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="header unselectable u-unselectable header-animated header-dark"
      style={{ marginBottom: "0" }}
    >
      <div className="header-brand">
        <div className="nav-item no-hover">
          <Link to="/home">
            <h6 className="title">rrrageinput</h6>
          </Link>
        </div>
        <div
          className={`nav-item nav-btn ${open ? "active" : ""}`}
          id="header-btn"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`header-nav ${open ? "active" : ""}`} id="header-menu">
        <div className="nav-right">
          <div className="nav-item text-center">
            <a href="https://github.com/supra-modum" target="blank">
              <span className="icon">
                <i className="fab fa-wrapper fa-github" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div className="nav-item text-center">
            <a href="https://twitter.com/rrrage_input" target="blank">
              <span className="icon">
                <i className="fab fa-wrapper fa-twitter" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div className="nav-item has-sub toggle-hover" id="dropdown">
            <a className="nav-dropdown-link">Menu</a>
            <ul className="dropdown-menu dropdown-animated" role="menu">
              <li role="menu-item">
                <Link to="/cv">CV</Link>
              </li>
              <li role="menu-item">
                <Link to="/projects-blog">Projects & Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
