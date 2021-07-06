import React from 'react';

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
    <div
      className='pb-2'
      style={{
        boxShadow: 'rgba(16,98,254, .7) 0px 10px 10px -10px',
      }}
    >
      <div className='px-4'>
        <h4 className='title'>{h4}</h4>
        <h5 className='subtitle' style={{ color: 'rgb(16,98,254)' }}>
          {h5}
        </h5>
        <p className='text-gray-600 m-0'>{children}</p>
      </div>
    </div>
  );
};
