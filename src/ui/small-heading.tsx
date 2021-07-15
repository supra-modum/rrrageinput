import React from 'react';

interface SmallHeadingProps {
  h2: string;
}

export const SmallHeading: React.FC<SmallHeadingProps> = ({ h2 }) => {
  return <h2 className='title py-2'>{h2}</h2>;
};
