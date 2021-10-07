import React from 'react';

import './ui-custom.scss';

interface TagsProps {
  tagsInfo: string[];
}

export const Tags: React.FC<TagsProps> = ({ tagsInfo }) => {
  return (
    <div className='tag-container'>
      {tagsInfo.map((text, index) => (
        <div className={`tag tag--rounded u-text-center my-1`} key={index}>
          {text}
        </div>
      ))}
    </div>
  );
};
