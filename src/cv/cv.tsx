import React from "react";
import "cirrus-ui";

import {
  Wrapper,
  SmallHeading,
  Footer,
  Header,
  HeroCV,
  H6Animated,
  List,
  Article,
  MarkComponent,
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
        <Article
          sectionData={[
            <>
              <p>Full stack engineer with focus on front end development.</p>
              <p>
                I work in the team responsible for developing POS software for
                small business.
              </p>
              <List
                dataList={[
                  <>
                    Refactoring a large{" "}
                    <MarkComponent>Scala.js/Scala-React</MarkComponent> code
                    base
                  </>,
                  <>
                    Developing inventory management application with{" "}
                    <MarkComponent>React</MarkComponent> &{" "}
                    <MarkComponent>TypeScript</MarkComponent> following the
                    functional programming approach
                  </>,
                  <>
                    Actively using state manager{" "}
                    <MarkComponent>Effector.js</MarkComponent>
                  </>,
                  <>
                    Introduced unit testing with{" "}
                    <MarkComponent>Jest</MarkComponent> for product identifiers
                    algorithms
                  </>,
                  <>
                    Programming automated GUI tests using{" "}
                    <MarkComponent>Java</MarkComponent> and{" "}
                    <MarkComponent>JUnit</MarkComponent>
                  </>,
                  <>
                    Learned fundamentals of <MarkComponent>Scala</MarkComponent>{" "}
                    and <MarkComponent>SQLite</MarkComponent>
                  </>,
                  <>
                    Using basic <MarkComponent>Shell</MarkComponent> scripting
                    techniques
                  </>,
                ]}
              />
            </>,
          ]}
        />
        <SmallHeading
          h4={"Web search evaluator"}
          h5={"Yandex LLC"}
          children={"Moscow, Russia – (Jan 2019 - Jul 2020)"}
        />
        <Article
          sectionData={[
            <>
              <p>Quality Rater at Yandex Search.</p>
              <p>
                Collected and analysed a vast amount of data, got better
                understanding of user behavior and their goals.
              </p>
            </>,
          ]}
        />
        <SmallHeading h4={"Skills"} children={"Technology & Languages"} />
        <Article
          sectionData={[
            <>
              <H6Animated>HTML & CSS</H6Animated>
              <p>Sass, Tailwind CSS, Bootstrap</p>
            </>,
            <>
              <H6Animated>JavaScript</H6Animated>
              <p>
                TypeScript, React, Node.js, Effector.js, Scala.js, Material UI,
                Jest
              </p>
            </>,
            <>
              <H6Animated>Languages</H6Animated>
              <p>
                Russian 🇷🇺
                <br />
                English 🇬🇧
                <br />
                Hebrew 🇮🇱 and French 🇫🇷 — still learning!
              </p>
            </>,
          ]}
        />
      </Wrapper>
      <Contacts />
      <Footer />
    </>
  );
};
