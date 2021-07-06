import { useStore } from 'effector-react';
import React from 'react';
import { $language, textCVHeaderEng, textCVHeaderRu } from '~/model';

export const HeroCV: React.FC = () => {
  const language = useStore($language);

  return (
    <div
      className='hero u-unselectable'
      style={{
        background:
          'radial-gradient(circle, #1062fe, #2153f8, #3141f2, #402cea, #4d00e0)',
        height: '350px',
      }}
    >
      <div className='hero-body'>
        <div className='mx-auto'>
          <div className='p-2'>
            <h1 className='white u-text-center'>
              {language === 'English' ? textCVHeaderEng.t1 : textCVHeaderRu.t1}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
