import React from 'react';
import { useStore } from 'effector-react';

import {
  textAboutMe,
  $language,
  textMainPageEng,
  textMainPageRu,
} from '../model';

import './home-custom.scss';

const HeroMain: React.FC = () => {
  const language = useStore($language);

  return (
    <div className='hero-main hero fullscreen u-unselectable'>
      <div className='hero-body'>
        <div className='p-2 u-center'>
          <div className='u-flex-column'>
            {language === 'English' ? (
              <div className='u-flex-column'>
                <div className='u-flex-column'>
                  <h2 className='hero-main__heading text-white'>
                    {textMainPageEng.text1}
                  </h2>
                </div>
                <div className='u-flex-column'>
                  <h2 className='hero-main__heading text-white'>
                    {textAboutMe.text}
                  </h2>
                </div>
              </div>
            ) : (
              <>
                <div className='u-flex-column'>
                  <h2 className='hero-main__heading text-white'>
                    {textMainPageRu.text1}
                  </h2>
                </div>
                <div className='u-flex-column'>
                  <h2 className='hero-main__heading text-white'>
                    {textAboutMe.text}
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
