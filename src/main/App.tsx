import React, { useEffect, useState } from "react";
import { Header, Footer } from "../index";

import "cirrus-ui";

export const App: React.FC = () => {
  const [colorChange, setColorChange] = useState("");

  const changeColor = () => {
    if (window.scrollY <= 80) {
      setColorChange("#f7b1b1");
    } else {
      setColorChange("#7fced5");
    }
  };

  useEffect(() => {
    changeColor();
    window.addEventListener("scroll", changeColor);
  });

  return (
    <>
      <Header />
      <div
        className="hero fullscreen"
        style={{
          background: `${colorChange}`,
          transition: "linear .3s",
          position: "relative",
        }}
      >
        <div className="hero-body">
          <div className="content u-text-center">
            <h1 className="title white pb-4">Hi! My name is Catherine</h1>
            <h2 className="subtitle white sub-title faded">
              Software engineer. Self-taught artist.
            </h2>
          </div>
        </div>
      </div>
      <div className="u-flex u-flex-column">
        <div className="p-4">
          <p className="lead">
            Full stack developer with 1 year of experience in the industry.
            Always passionate about learning new things ✨📘
          </p>
          <p className="lead">Currently based in Moscow, Russia.</p>
        </div>
      </div>
      <div className="u-flex u-flex-column">
        <div className="p-4">
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            cupiditate, mollitia consequatur quibusdam inventore necessitatibus
            quis, eaque recusandae incidunt nostrum placeat fuga excepturi
            dignissimos amet, dolores reprehenderit hic nulla. Exercitationem?
          </p>
        </div>
      </div>
      <div className="u-flex u-flex-column">
        <div className="p-4">
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            ad debitis aliquid suscipit numquam, rerum voluptatum repellendus
            expedita, esse adipisci cupiditate deserunt reiciendis. Repellat
            repudiandae quidem porro doloribus sequi dignissimos? Deserunt,
            magnam id nulla reiciendis dolor dolores fugiat harum veniam
            distinctio dolore culpa delectus ipsam doloribus. Vitae libero
            maiores fugit rerum minima culpa ea aliquam voluptates? Sunt tempore
            debitis velit?
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

// "radial-gradient(circle, #e85c61, #e9628a, #dd71ae, #c783cb, #ab94de, #95a3ed, #7eb2f5, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"

/* <div
          style={{
            transition: "all .3s",
            backgroundImage:
              "linear-gradient(180deg,hsla(0,0%,100%,.0001),#fff)",
            height: "175px",
            position: "absolute",
            bottom: "0",
            top: "175",
            left: "0",
            right: "0",
          }}
        /> */
