import React, { useState } from "react";
import "cirrus-ui";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="header unselectable header-animated header-dark"
      style={{ marginBottom: "0" }}
    >
      <div className="header-brand">
        <div className="nav-item no-hover">
          <a>
            <h6 className="title">rrrageinput</h6>
          </a>
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
            <a href="#">
              <span className="icon">
                <i className="fab fa-wrapper fa-github" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div className="nav-item text-center">
            <a href="#">
              <span className="icon">
                <i className="fab fa-wrapper fa-twitter" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div className="nav-item has-sub toggle-hover" id="dropdown">
            <a className="nav-dropdown-link">Menu</a>
            <ul className="dropdown-menu dropdown-animated" role="menu">
              <li role="menu-item">
                <a href="#">First Item</a>
              </li>
              <li role="menu-item">
                <a href="#">Second Item</a>
              </li>
              <li role="menu-item">
                <a href="#">Third Item</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
