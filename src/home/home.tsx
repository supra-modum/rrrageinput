import * as React from 'react';
import { useEffect } from 'react';
import { useStore } from 'effector-react';
import 'cirrus-ui';

import { Footer, Header, Toast } from "../ui";
import { Skills } from './skills';
import {
  $language,
  setLanguage,
  textMainPageEng,
  textMainPageRu,
} from '../model';

import HeroMain from './hero-main';
import HeroAbout from './hero-about';
import Contacts from './contacts';

export const Home = () => {
  const language = useStore($language);

  // TODO: read more about lazy loading in react 18
  /**
   * const HeroMain = React.lazy(() => import('./hero-main'));
   * const HeroAbout = React.lazy(() => import('./hero-about'));
   *  const Contacts = React.lazy(() => import('./contacts'));
   */

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem('language') || 'English');

    localStorage.setItem('language', JSON.stringify(lang));
    setLanguage(lang);
  }, [language]);

  return (
    <>
      <Header />
      <main style={{position: "relative"}}>
        <HeroMain />
        <div className='space xlarge bg-gray-000' />
        <HeroAbout
          headingTextEng='About me'
          headingTextRu='Обо мне'
          language={language}
        >
          <Skills language={language} />
        </HeroAbout>

        <div className='space large bg-gray-000' />
        <Contacts
          language={language}
          contactEng={textMainPageEng.text2}
          contactRu={textMainPageRu.text2}
        />
      </main>
      <Footer />
    </>
  );
};
