import React from "react";

import { Tags } from "./tags";

export const HeroCV: React.FC = () => {
  return (
    <div className="hero fullscreen bg-blue-100 u-unselectable mb-2">
      <div className="hero-body">
        <div className="mx-auto">
          <div className="p-2">
            <h1 className="text-indigo-500">Work experience 👩🏻‍💻</h1>
          </div>
          <div className="p-2">
            <h3>Skills:</h3>
            <Tags
              tagsInfo={[
                "TypeScript",
                "React",
                "Node.js",
                "Scala.js",
                "Effector.js",
                "Jest & JUnit",
                "Scala",
              ]}
            />
            <Tags
              tagsInfo={["Tailwind CSS", "Sass", "Bootstrap", "Material UI"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
