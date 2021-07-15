/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useStore } from 'effector-react';
import React from 'react';
import { $language, textMainPageEng, textMainPageRu } from '~/model';

const HeroMain: React.FC = () => {
  const language = useStore($language);

  return (
    <div
      className='hero fullscreen u-unselectable bg-gray-200'
      style={{
        backgroundImage:
          'radial-gradient(rgba(15,98,254) 1px, rgba(15,98,254, .05) 0)',
        backgroundSize: '22px 22px',
        backgroundPosition: 'center',
      }}
    >
      <div className='hero-body'>
        <div className='p-2 u-center'>
          <div className='u-flex-column'>
            {language === 'English' ? (
              <div className='u-flex-column'>
                <div className='u-flex-column'>
                  <h2
                    className='white'
                    style={{
                      backgroundColor: 'rgb(16,98,254)',
                      boxShadow:
                        '0.50em 0 0 rgb(16,98,254), -0.50em 0 0 rgb(16,98,254)',
                      boxDecorationBreak: 'clone',
                      lineHeight: 2.5,
                      display: 'inline',
                      padding: '0.2em 0em',
                    }}
                  >
                    {textMainPageEng.t1}
                  </h2>
                </div>
                <div className='u-flex-column'>
                  <h2
                    className='white'
                    style={{
                      backgroundColor: 'rgb(16,98,254)',
                      boxShadow:
                        '0.50em 0 0 rgb(16,98,254), -0.50em 0 0 rgb(16,98,254)',
                      boxDecorationBreak: 'clone',
                      lineHeight: 2.5,
                      display: 'inline',
                      padding: '0.2em 0em',
                    }}
                  >
                    {textMainPageEng.t2}
                  </h2>
                </div>
              </div>
            ) : (
              <>
                <div className='u-flex-column'>
                  <h2
                    className='white'
                    style={{
                      backgroundColor: 'rgb(16,98,254)',
                      boxShadow:
                        '0.50em 0 0 rgb(16,98,254), -0.50em 0 0 rgb(16,98,254)',
                      boxDecorationBreak: 'clone',
                      lineHeight: 2.5,
                      display: 'inline',
                      padding: '0.2em 0em',
                    }}
                  >
                    {textMainPageRu.t1}
                  </h2>
                </div>
                <div className='u-flex-column'>
                  <h2
                    className='white'
                    style={{
                      backgroundColor: 'rgb(16,98,254)',
                      boxShadow:
                        '0.50em 0 0 rgb(16,98,254), -0.50em 0 0 rgb(16,98,254)',
                      boxDecorationBreak: 'clone',
                      lineHeight: 2.5,
                      display: 'inline',
                      padding: '0.2em 0em',
                    }}
                  >
                    {textMainPageRu.t2}
                  </h2>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
