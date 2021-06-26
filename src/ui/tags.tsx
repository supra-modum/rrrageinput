import React from "react";

interface TagsProps {
  tagsInfo: string[];
  bgColor?: string;
}

export const Tags: React.FC<TagsProps> = ({
  tagsInfo,
  bgColor = "bg-indigo-200",
}) => {
  return (
    <div className="tag-container">
      {tagsInfo.map((text) => (
        <div className={`tag ${bgColor}`}>{text}</div>
      ))}
    </div>
  );
};
