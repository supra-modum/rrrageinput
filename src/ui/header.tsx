import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'cirrus-ui';

import { setLanguage } from '../model';

import './ui-custom.scss';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='ui-custom-header header header-fixed u-unselectable no-hover'>
      <div className='header-brand'>
        <div className='nav-item no-hover'>
          <Link to='/home'>
            <h6 className='title text-dark'>rrrageinput</h6>
          </Link>
        </div>
        <div
          className={`nav-item nav-btn ${open ? 'active' : ''}`}
          id='header-btn'
          onClick={() => setOpen(!open)}
        >
          <span className='bg-dark'></span>
          <span className='bg-dark'></span>
          <span className='bg-dark'></span>
        </div>
      </div>
      <div className={`header-nav ${open ? 'active' : ''}`} id='header-menu'>
        <div className='nav-right'>
          <div
            className='nav-item text-center p-2'
            onClick={() => setLanguage('English')}
            title='This page in English'
          >
            <div className='btn btn-transparent font-semibold p-0'>.eng</div>
          </div>
          <div
            className='nav-item text-center p-2'
            onClick={() => setLanguage('Russian')}
            title='This page in Russian'
          >
            <div className='btn btn-transparent font-semibold p-0'>.ru</div>
          </div>
          <div className='nav-item text-center'>
            <Link
              to='/projects-blog'
              title='My blog posts & projects'
              className='text-dark font-semibold'
            >
              .projects( )
            </Link>
          </div>
          <div className='nav-item text-center'>
            <a
              href='https://github.com/supra-modum'
              target='blank'
              title='Github'
            >
              <span className='icon'>
                <i
                  className='fab fa-wrapper fa-github text-dark'
                  aria-hidden='true'
                ></i>
              </span>
            </a>
          </div>
          <div className='nav-item text-center'>
            <a
              href='https://www.linkedin.com/in/ezaslavskaya/'
              target='blank'
              title='LinkedIn'
            >
              <span className='icon'>
                <i
                  className='fab fa-wrapper fa-linkedin text-dark'
                  aria-hidden='true'
                ></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
