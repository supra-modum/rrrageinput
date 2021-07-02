import React from "react";

interface ArticleProps {
  sectionData: React.ReactNode[];
}

export const Article: React.FC<ArticleProps> = ({ sectionData }) => {
  return (
    <article className="px-4">
      {sectionData.map((data) => (
        <section className="py-2">{data}</section>
      ))}
    </article>
  );
};
