import React from 'react';

export const Wrapper: React.FC = ({ children }) => {
  return (
    <div className='row bg-gray-000'>
      <div className='col-lg-12 px-2'>{children}</div>
    </div>
  );
};
