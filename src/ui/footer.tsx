import React from 'react';
import { Link } from 'react-router-dom';

import './ui-custom.scss';

export const Footer: React.FC = () => {
  return (
    <>
      <footer className='ui-custom-footer footer u-unselectable'>
        <h6 className='footer__title white'>rrrageinput</h6>
        <div className='content'>
          <div className='divider'></div>
          <div className='row'>
            <div className='col-12'>
              <ul className='no-bullets'>
                <li className='footer__list-item py-1'>
                  <Link to='/home'>Home</Link>
                </li>
                <li className='footer__list-item py-1'>
                  <Link to='/projects-blog'>Projects & Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='space xlarge' style={{ backgroundColor: '#121212' }} />
        <p className='subtitle'>
          Made with{' '}
          <a
            href='https://cirrus-ui.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Cirrus UI
          </a>{' '}
          and ❤️
        </p>
        <p className='subtitle'>
          Icons made by{' '}
          <a href='https://www.freepik.com' title='Freepik'>
            Freepik
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </p>
        <div className='space large' style={{ backgroundColor: '#121212' }} />
        <p className='subtitle'>Catherine Zaslavskaya © 2021</p>
      </footer>
    </>
  );
};
