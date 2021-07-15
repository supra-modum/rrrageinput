import React from 'react';

interface TagsProps {
  tagsInfo: string[];
}

export const Tags: React.FC<TagsProps> = ({ tagsInfo }) => {
  return (
    <div className='tag-container'>
      {tagsInfo.map((text, index) => (
        <div
          className={`tag tag--rounded u-text-center my-1`}
          key={index}
          style={{
            backgroundColor: 'rgba(15,98,254,.4)',
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};
