import React, { useEffect } from 'react';
import 'cirrus-ui';
import {
  Header,
  HeroMain,
  Footer,
  HeroCV,
  Wrapper,
  HeroShortAbout,
  CardJob,
} from '../exports';
import { useStore } from 'effector-react';
import {
  $language,
  setLanguage,
  textMainPageEng,
  textMainPageRu,
} from '~/model';
import { textAboutMSEng, textAboutMSRu } from '~/model/texts';
import { JobList } from './job-list';

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
      <HeroShortAbout
        language={language}
        pEng={[textMainPageEng.t3, textMainPageEng.t4, textMainPageEng.t5]}
        pRu={[textMainPageRu.t3, textMainPageRu.t4, textMainPageRu.t5]}
      />
      <HeroCV />
      <Wrapper>
        <CardJob
          headingH4={'Full stack engineer'}
          headingH5={'МойСклад'}
          headingSubtitle={
            <>
              <p className='mb-0'>Moscow, Russia</p>
              <p>(Aug 2020 - Present)</p>
            </>
          }
          about={
            language === 'English'
              ? [textAboutMSEng.t1, textAboutMSEng.t2]
              : [textAboutMSRu.t1]
          }
        >
          <JobList language={language} />
        </CardJob>
      </Wrapper>
      <div
        className='hero bg-gray-200'
        style={{
          height: '600px',
          backgroundImage:
            'radial-gradient(rgba(15,98,254, .7) 1px, rgba(15,98,254, .05) 0)',
          backgroundSize: '22px 22px',
          backgroundPosition: 'center',
        }}
      >
        <div className='hero-body'>
          <div className='content'>
            <div
              className='card u-flex-column u-center bg-gray-000'
              style={{
                boxShadow: 'rgba(16,98,254, .7) 0px 20px 30px',
                maxWidth: '600px',
                height: '300px',
              }}
            >
              <div className='card__header'>
                <p className='font-bold px-3 u-text-center'>
                  {language === 'English'
                    ? textMainPageEng.t6
                    : textMainPageRu.t6}
                </p>
              </div>
              <div className='content u-center'>
                <p className='px-2'>
                  <a
                    href='mailto:3mfhognm5@relay.firefox.com'
                    className='u u-LR'
                    style={{ color: 'rgba(15,98,254)' }}
                  >
                    Email
                  </a>
                </p>
                <p className='px-2'>
                  <a
                    href='https://t.me/supramodum'
                    className='u u-LR'
                    style={{ color: 'rgba(15,98,254)' }}
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
