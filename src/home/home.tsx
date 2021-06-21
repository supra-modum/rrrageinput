import React from "react";
import "cirrus-ui";
import { Header, Hero, Footer } from "../exports";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="u-center w-80" style={{ height: "500px" }}>
        <p className="text-center" style={{ fontSize: "1.5rem" }}>
          Full stack developer with 1 year of experience in the industry.
          <br />
          Currently based in Moscow, Russia.
          <br />
          Always passionate about learning new things ✨📘
        </p>
      </div>
      <Footer />
    </>
  );
};
