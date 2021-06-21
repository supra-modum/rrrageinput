import React from "react";
import "cirrus-ui";

import { Header, Footer, SmallHeading } from "../exports";

export const CV: React.FC = () => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-12 m-1">
          <div className="text-indigo-400 p-4 m-2">
            <h3 className="headline-4 u-text-center">Work experience 👩🏻‍💻</h3>
          </div>
          <div className="p-4 m-2">
            <SmallHeading
              h4={"Full stack engineer"}
              h5={"МойСклад"}
              children={"Moscow, Russia – (Aug 2020 - Present)"}
            />
            <article>
              Full stack engineer with focus on front end development. I work in
              the team responsible for developing POS software for small
              business.
              <ul>
                <li>
                  Refactoring a large <code>Scala.js/Scala-React</code> code
                  base
                </li>
                <li>
                  Developing inventory management application with{" "}
                  <code>React</code> & <code>TypeScript</code> following the
                  functional programming approach
                </li>
                <li>
                  Actively using state manager <code>Effector.js</code>
                </li>
                <li>
                  Introduced unit testing with <code>Jest</code> for product
                  identifiers algorithms
                </li>
                <li>
                  Programming automated GUI tests using <code>Java</code> and{" "}
                  <code>JUnit</code>
                </li>
                <li>
                  Learned fundamentals of <code>Scala</code> and{" "}
                  <code>SQLite</code>
                </li>
                <li>
                  Using basic <code>Shell</code> scripting techniques
                </li>
              </ul>
            </article>
          </div>
          <div className="p-4 m-2">
            <SmallHeading
              h4={"Web search evaluator"}
              h5={"Yandex LLC"}
              children={"Moscow, Russia – (Jan 2019 - Jul 2020)"}
            />
            <article>
              <p>Quality Rater at Yandex Search.</p>
              <p>
                Collected and analysed a vast amount of data, got better
                understanding of user behavior and their goals.
              </p>
            </article>
          </div>
          <div className="p-4 m-2">
            <SmallHeading h4={"Skills"} children={"Technology & Languages"} />
            <div className="row u-items-baseline">
              <div className="u-flex-column p-6 u-center u-justify-center">
                <ul className="no-bullets">
                  <h6 className="text-indigo-400 u-text-center py-2">
                    HTML & CSS
                  </h6>
                  <li>Sass</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="u-flex-column p-6 u-center">
                <ul className="no-bullets">
                  <h6 className="text-indigo-400 u-text-center py-2">
                    JavaScript
                  </h6>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Material UI</li>
                  <li>Node.js</li>
                  <li>Effector.js</li>
                  <li>Scala.js</li>
                  <li>Jest</li>
                </ul>
              </div>
              <div className="u-flex-column p-6 u-center">
                <ul className="no-bullets">
                  <h6 className="text-indigo-400 u-text-center py-2">
                    Languages
                  </h6>
                  <li>Russian 🇷🇺 — native speaker</li>
                  <li>English 🇬🇧 — B2</li>
                  <li>Hebrew 🇮🇱 and French 🇫🇷 — still learning!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
