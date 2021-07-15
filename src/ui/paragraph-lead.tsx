import React from 'react';

interface ParagraphLeadProps {
  data: React.ReactNode[];
  isLead: boolean;
}
export const ParagraphLead: React.FC<ParagraphLeadProps> = ({
  data,
  isLead,
}) => {
  return (
    <>
      {data.map((paragraph, index) => (
        <p className={`${isLead ? 'lead' : null} text-gray-700`} key={index}>
          {paragraph}
        </p>
      ))}
    </>
  );
};
