import React, { useEffect } from 'react';
import 'cirrus-ui';

import {
  Wrapper,
  Footer,
  Header,
  HeroCV,
  Article,
  SmallHeading,
  MarkComponent,
  List,
} from '../../exports';
import { $language } from '~/model';
import { useStore } from 'effector-react';
import { setLanguage } from '~/model/texts';

export const CV: React.FC = () => {
  const language = useStore($language);

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem('language') || 'English');

    localStorage.setItem('language', JSON.stringify(lang));
    setLanguage(lang);
  }, [language]);
  return (
    <>
      <Header />
      <HeroCV />
      <Wrapper>
        <Article
          sectionData={[
            <>
              <SmallHeading
                h4={'Full stack engineer'}
                h5={'МойСклад'}
                children={
                  <>
                    <p className='mb-0'>Moscow, Russia</p>
                    <p>(Aug 2020 - Present)</p>
                  </>
                }
              />
              <div className='px-4'>
                <p>Full stack engineer with focus on front end development.</p>
                <p>
                  I work in the team responsible for developing POS software for
                  small business.
                </p>
                <List
                  dataList={[
                    <>
                      Refactoring a large{' '}
                      <MarkComponent>Scala.js/Scala-React</MarkComponent> code
                      base
                    </>,
                    <>
                      Developing inventory management application with{' '}
                      <MarkComponent>React</MarkComponent> &{' '}
                      <MarkComponent>TypeScript</MarkComponent> following the
                      functional programming approach
                    </>,
                    <>
                      Actively using state manager{' '}
                      <MarkComponent>Effector.js</MarkComponent>
                    </>,
                    <>
                      Introduced unit testing with{' '}
                      <MarkComponent>Jest</MarkComponent> for product
                      identifiers algorithms
                    </>,
                    <>
                      Programming automated GUI tests using{' '}
                      <MarkComponent>Java</MarkComponent> and{' '}
                      <MarkComponent>JUnit</MarkComponent>
                    </>,
                    <>
                      Learned fundamentals of{' '}
                      <MarkComponent>Scala</MarkComponent> and{' '}
                      <MarkComponent>SQLite</MarkComponent>
                    </>,
                    <>
                      Using basic <MarkComponent>Shell</MarkComponent> scripting
                      techniques
                    </>,
                  ]}
                />
              </div>
            </>,
          ]}
        />
      </Wrapper>
      <Footer />
    </>
  );
};
