import React, { useEffect } from 'react';
import 'cirrus-ui';
import { Header, HeroMain, Footer } from '../exports';
import { useStore } from 'effector-react';
import {
  $language,
  setLanguage,
  textMainPageEng,
  textMainPageRu,
} from '~/model';

export const Home: React.FC = () => {
  const language = useStore($language);

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem('language') || 'English');

    localStorage.setItem('language', JSON.stringify(lang));
    setLanguage(lang);
  }, [language]);

  return (
    <>
      <Header />
      <HeroMain />
      <div className='hero fullscreen bg-gray-000'>
        <div className='hero-body'>
          <div className='mx-auto'>
            <div className='content'>
              {language === 'English' ? (
                <>
                  <p className='lead text-gray-700'>{textMainPageEng.t3}</p>
                  <p className='lead text-gray-700'>{textMainPageEng.t4}</p>
                  <p className='lead text-gray-700'>{textMainPageEng.t5}</p>
                </>
              ) : (
                <>
                  <p className='lead text-gray-700'>{textMainPageRu.t3}</p>
                  <p className='lead text-gray-700'>{textMainPageRu.t5}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className='hero'
        style={{
          height: '600px',
          background:
            'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))',
        }}
      >
        <div className='hero-body'>
          <div className='content'>
            <div
              className='card u-flex-column u-center bg-gray-000'
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 20px 30px',
                maxWidth: '400px',
                height: '300px',
              }}
            >
              <div className='card__header'>
                <p className='font-bold px-3'>
                  {language === 'English'
                    ? textMainPageEng.t6
                    : textMainPageRu.t6}
                </p>
              </div>
              <div className='content u-center'>
                <p className='px-2'>
                  <a
                    href='mailto:3mfhognm5@relay.firefox.com'
                    className='u u-LR text-link'
                  >
                    Email
                  </a>
                </p>
                <p className='px-2'>
                  <a
                    href='https://t.me/supramodum'
                    className='u u-LR text-link'
                  >
                    Telegram
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
