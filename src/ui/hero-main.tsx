import { useStore } from 'effector-react';
import React from 'react';
import { $language, textMainPageEng, textMainPageRu } from '~/model/texts';

export const HeroMain: React.FC = () => {
  const language = useStore($language);

  const img3 =
    'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80';

  return (
    <div
      className='hero fullscreen u-unselectable parallax-img hero-img'
      style={{
        background: `linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(33,33,33, .7),rgba(16,98,254, .6), rgba(74, 0, 224, .7)), url(${img3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='hero-body'>
        <div className='content mt-8'>
          <div className='u-flex-column'>
            {language === 'English' ? (
              <>
                <div className='u-flex-column'>
                  <h2 className='white'>
                    <span
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
                    </span>
                  </h2>
                </div>
                <div className='u-flex-column'>
                  <h2 className='white'>
                    <span
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
                    </span>
                  </h2>
                </div>
              </>
            ) : (
              <>
                <div className='u-flex-column'>
                  <h2 className='white'>
                    <span
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
                    </span>
                  </h2>
                </div>
                <div className='u-flex-column'>
                  <h2 className='white'>
                    <span
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
                    </span>
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
