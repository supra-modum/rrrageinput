import React, { useEffect, Suspense } from 'react';
import { useStore } from 'effector-react';
import 'cirrus-ui';

import { Footer, Header, RenderLoader } from '../exports';
import { Skills } from './skills';
import {
  $language,
  setLanguage,
  textMainPageEng,
  textMainPageRu,
} from '~/model';

export const Home: React.FC = () => {
  const language = useStore($language);

  const HeroMain = React.lazy(() => import('./hero-main'));
  const HeroAbout = React.lazy(() => import('./hero-about'));
  const Contacts = React.lazy(() => import('./contacts'));

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem('language') || 'English');

    localStorage.setItem('language', JSON.stringify(lang));
    setLanguage(lang);
  }, [language]);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={RenderLoader}>
          <HeroMain />
        </Suspense>
        <Suspense fallback={RenderLoader}>
          <div className='space xlarge bg-gray-000' />
          <HeroAbout
            headingTextEng='About me'
            headingTextRu='Обо мне'
            language={language}
          >
            <Skills language={language} />
          </HeroAbout>
          <div className='space large bg-gray-000' />
        </Suspense>
        <Suspense fallback={RenderLoader}>
          <Contacts
            language={language}
            contactEng={textMainPageEng.t3}
            contactRu={textMainPageRu.t3}
          />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
