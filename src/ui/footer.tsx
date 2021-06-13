import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-200">
      <h6 className="footer__title uppercase" style={{ color: "#7fced5" }}>
        rrrageinput
      </h6>
      <div className="content">
        <div className="divider"></div>
        <div className="row">
          <div className="col-12">
            <ul className="no-bullets">
              <a href="#header-menu">
                <li className="footer__list-item">Home</li>
              </a>
              <a href="!#">
                <li className="footer__list-item">CV</li>
              </a>
              <a href="!#">
                <li className="footer__list-item">Projects</li>
              </a>
              <ul></ul>
            </ul>
          </div>
        </div>
      </div>
      <p className="subtitle">rrrageinput © 2021.</p>
    </footer>
  );
};
