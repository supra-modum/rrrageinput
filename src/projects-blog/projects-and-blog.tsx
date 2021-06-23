import React from "react";
import { Link } from "react-router-dom";

import "cirrus-ui";
import { Wrapper } from "~/exports";

export const ProjectsAndBlog: React.FC = () => {
  return (
    <Wrapper>
      <div className="u-center" style={{ height: "600px" }}>
        <h2 className="headline-4 u-text-center">
          Something nice will be there soon
        </h2>
        <Link to="/home">
          <h3 className="text-indigo-500 heading-4 u u-LR">Home</h3>
        </Link>
      </div>
    </Wrapper>
  );
};
