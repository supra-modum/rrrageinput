import React from 'react';

interface TagsProps {
  tagsInfo: string[];
  bgColor?: string;
}

export const Tags: React.FC<TagsProps> = ({
  tagsInfo,
  bgColor = 'bg-gray-000',
}) => {
  return (
    <div className='tag-container'>
      {tagsInfo.map((text, index) => (
        <div className={`tag tag--rounded ${bgColor}`} key={index}>
          {text}
        </div>
      ))}
    </div>
  );
};
