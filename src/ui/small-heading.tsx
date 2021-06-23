import React from "react";
import "cirrus-ui";

interface SmallHeadingProps {
  h4: string;
  h5?: string;
}

export const SmallHeading: React.FC<SmallHeadingProps> = ({
  h4,
  h5,
  children,
}) => {
  return (
    <div>
      <h4>{h4}</h4>
      <h5 className="text-indigo-500">{h5}</h5>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};
