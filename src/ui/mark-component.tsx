import React from "react";

export const MarkComponent: React.FC = ({ children }) => {
  return <mark className="bg-indigo-300">{children}</mark>;
};
