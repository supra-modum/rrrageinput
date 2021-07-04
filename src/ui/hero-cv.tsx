import { useStore } from 'effector-react';
import React from 'react';
import { $language, textCVHeaderEng, textCVHeaderRu } from '~/model';

export const HeroCV: React.FC = () => {
  const language = useStore($language);

  return (
    <div
      className='hero fullscreen u-unselectable mb-0'
      style={{
        background:
          'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))',
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
