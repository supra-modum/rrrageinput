import React from "react";

export const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 m-1">
          <div className="p-4 m-2">{children}</div>
        </div>
      </div>
    </>
  );
};
