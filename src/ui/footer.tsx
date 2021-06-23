import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-100" style={{ marginTop: "0" }}>
      <h6 className="footer__title uppercase text-indigo-400">rrrageinput</h6>
      <div className="content">
        <div className="divider"></div>
        <div className="row">
          <div className="col-12">
            <ul className="no-bullets">
              <Link to="/home">
                <li className="footer__list-item">Home</li>
              </Link>
              <Link to="/cv">
                <li className="footer__list-item">CV</li>
              </Link>
              <Link to="/projects-blog">
                <li className="footer__list-item">Projects & Blog</li>
              </Link>
              <ul></ul>
            </ul>
          </div>
        </div>
      </div>
      <p className="subtitle">Catherine Zaslavskaya © 2021</p>
      <p className="subtitle">
        Built with React & TypeScript,{" "}
        <a
          href="http://cirrus-ui.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="u u-LR text-indigo-400"
        >
          Cirrus UI
        </a>{" "}
        and 🖤
      </p>
    </footer>
  );
};
