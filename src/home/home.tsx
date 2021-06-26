import React from "react";
import "cirrus-ui";
import { Header, HeroMain, Footer } from "../exports";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HeroMain />
      <div className="hero fullscreen" style={{ backgroundColor: "#212121" }}>
        <div className="hero-body">
          <div className="mx-auto">
            <div className="py-2">
              <p className="lead text-gray-100">
                Full stack developer with 1 year of experience in the industry.
                <br />
                Always passionate about learning new things ✨📘
              </p>
              <p className="lead text-gray-100">
                Currently based in Moscow, Russia.
              </p>
            </div>
            <div className="py-2">
              <p className="text-gray-100">
                Email:{" "}
                <a href="mailto:" className="u u-LR text-indigo-400">
                  3mfhognm5@relay.firefox.com
                </a>
              </p>
              <p className="text-gray-100">
                Telegram:{" "}
                <a
                  href="https://t.me/supramodum"
                  className="u u-LR text-indigo-400"
                >
                  supramodum
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
