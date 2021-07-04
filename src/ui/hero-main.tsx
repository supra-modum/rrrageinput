import { useStore } from 'effector-react';
import React from 'react';
import { $language, textMainPageEng, textMainPageRu } from '~/model/texts';

export const HeroMain: React.FC = () => {
  const language = useStore($language);

  const img =
    'https://images.unsplash.com/photo-1486551937199-baf066858de7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1446&q=80';

  return (
    <div
      className='hero fullscreen u-unselectable parallax-img hero-img'
      style={{
        background: `linear-gradient(rgba(33,33,33, .9), rgba(33,33,33, .7)), url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='hero-body'>
        <div className='content'>
          {language === 'English' ? (
            <>
              <h2
                className='p-2 white u-inline-block'
                style={{
                  background:
                    'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))',
                  borderRadius: '5px',
                }}
              >
                {textMainPageEng.t1}
              </h2>
              <h2 className='py-2 white u-inline-block'>
                {textMainPageEng.t2}
              </h2>
            </>
          ) : (
            <>
              <h2
                className='p-2 white u-inline-block'
                style={{
                  background:
                    'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))',
                  borderRadius: '5px',
                }}
              >
                {textMainPageRu.t1}
              </h2>
              <h2 className='py-2 white u-inline-block'>{textMainPageRu.t2}</h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
