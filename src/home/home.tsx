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
  Contacts,
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
      <Contacts
        language={language}
        contactEng={textMainPageEng.t6}
        contactRu={textMainPageRu.t6}
      />
      <Footer />
    </>
  );
};
