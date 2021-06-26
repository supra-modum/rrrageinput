import React, { useState, useEffect } from "react";

export const HeroMain: React.FC = () => {
  const [colorChange, setColorChange] = useState("");
  const [fontColorChange, setFontColorChange] = useState("");

  const scroll = () => {
    if (window.scrollY <= 50) {
      setColorChange("#212121");
    } else {
      setColorChange("#a1befa");
    }
  };

  const headerScroll = () => {
    if (window.scrollY <= 50) {
      setFontColorChange("#a1befa");
    } else {
      setFontColorChange("white");
    }
  };

  useEffect(() => {
    scroll();
    headerScroll();

    window.addEventListener("scroll", scroll);
  }, [scroll, headerScroll]);

  return (
    <div
      className="hero fullscreen u-unselectable"
      style={{
        backgroundColor: `${colorChange}`,
        transition: "background-color 1s ease",
      }}
    >
      <div className="hero-body">
        <div className="content u-text-center">
          <h1
            className="title pb-4"
            style={{
              color: `${fontColorChange}`,
            }}
          >
            Hi! My name is Catherine
          </h1>
          <h2 className="subtitle white sub-title faded">
            Software engineer. Self-taught artist.
          </h2>
        </div>
      </div>
    </div>
  );
};
