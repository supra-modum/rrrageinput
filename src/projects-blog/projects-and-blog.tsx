import React from 'react';
import { Link } from 'react-router-dom';

import 'cirrus-ui';

export const ProjectsAndBlog: React.FC = () => {
  return (
    <div className='content u-center' style={{ height: '800px' }}>
      <div className='u-flex-column'>
        <h2 className='headline-4 u-text-center'>
          Something nice will be there soon
        </h2>
      </div>
      <div className='u-flex u-flex-column u-align-center u-justify-center'>
        <h3 className='heading-4 u u-LR u-text-center'>
          <Link to='/home' style={{ color: 'rgba(15,98,254)' }}>
            Home
          </Link>
        </h3>
      </div>
    </div>
  );
};
