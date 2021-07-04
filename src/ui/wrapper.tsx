import React from 'react';

export const Wrapper: React.FC = ({ children }) => {
  return (
    <div className='row'>
      <div className='col-lg-12 px-2'>{children}</div>
    </div>
  );
};
