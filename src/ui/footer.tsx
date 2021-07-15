import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <>
      <footer
        className='footer u-unselectable'
        style={{ marginTop: '0', backgroundColor: '#121212' }}
      >
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
        <p className='subtitle'>Catherine Zaslavskaya © 2021</p>
      </footer>
    </>
  );
};
