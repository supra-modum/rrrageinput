import React from "react";
import "cirrus-ui";

import {
  Wrapper,
  SmallHeading,
  Footer,
  Header,
  HeroCV,
  H6Animated,
} from "../exports";
import { Contacts } from "~/contacts";

export const CV: React.FC = () => {
  return (
    <>
      <Header />
      <HeroCV />
      <Wrapper>
        <SmallHeading
          h4={"Full stack engineer"}
          h5={"МойСклад"}
          children={"Moscow, Russia – (Aug 2020 - Present)"}
        />
        <article className="px-4">
          Full stack engineer with focus on front end development. I work in the
          team responsible for developing POS software for small business.
          <ul>
            <li>
              Refactoring a large <mark>Scala.js/Scala-React</mark> code base
            </li>
            <li>
              Developing inventory management application with{" "}
              <mark>React</mark> & <mark>TypeScript</mark> following the
              functional programming approach
            </li>
            <li>
              Actively using state manager <mark>Effector.js</mark>
            </li>
            <li>
              Introduced unit testing with <mark>Jest</mark> for product
              identifiers algorithms
            </li>
            <li>
              Programming automated GUI tests using <mark>Java</mark> and{" "}
              <mark>JUnit</mark>
            </li>
            <li>
              Learned fundamentals of <mark>Scala</mark> and <mark>SQLite</mark>
            </li>
            <li>
              Using basic <mark>Shell</mark> scripting techniques
            </li>
          </ul>
        </article>
        <SmallHeading
          h4={"Web search evaluator"}
          h5={"Yandex LLC"}
          children={"Moscow, Russia – (Jan 2019 - Jul 2020)"}
        />
        <article className="px-4">
          <p>Quality Rater at Yandex Search.</p>
          <p>
            Collected and analysed a vast amount of data, got better
            understanding of user behavior and their goals.
          </p>
        </article>
        <SmallHeading h4={"Skills"} children={"Technology & Languages"} />
        <article className="px-4">
          <section className="py-1">
            <H6Animated>HTML & CSS</H6Animated>
            <p>Sass, Tailwind CSS, Bootstrap</p>
          </section>
          <section className="py-1">
            <H6Animated>JavaScript</H6Animated>
            <p>
              TypeScript, React, Node.js, Effector.js, Scala.js, Material UI,
              Jest
            </p>
          </section>
          <section className="py-1">
            <H6Animated>Languages</H6Animated>
            <p>
              Russian 🇷🇺
              <br />
              English 🇬🇧
              <br />
              Hebrew 🇮🇱 and French 🇫🇷 — still learning!
            </p>
          </section>
        </article>
      </Wrapper>
      <Contacts />
      <Footer />
    </>
  );
};
