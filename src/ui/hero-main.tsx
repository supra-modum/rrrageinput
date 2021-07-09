import { useStore } from 'effector-react';
import React from 'react';
import { $language, textMainPageEng, textMainPageRu } from '~/model/texts';
import { imageHeroMain } from '../assets/image-links';

export const HeroMain: React.FC = () => {
  const language = useStore($language);

  return (
    <div
      className='hero fullscreen u-unselectable parallax-img hero-img'
      style={{
        background: `linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(33,33,33, .7),rgba(16,98,254, .6), rgba(74, 0, 224, .7)), url('https://rrrageinput.com/background.png')`,
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
