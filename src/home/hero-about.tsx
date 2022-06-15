import * as React from 'react';
import { SmallHeading } from '../ui';

import './home-custom.scss';

//@ts-ignore
// import cv from 'url:../assets/cv.pdf';

interface HeroAboutProps {
  language: string;
  headingTextRu: string;
  headingTextEng: string;
  children?: React.ReactNode;
}
const HeroAbout = ({
  language,
  headingTextRu,
  headingTextEng,
  children,
}: HeroAboutProps) => {
  return (
    <div className='hero-about hero bg-gray-000'>
      <div className='hero-body'>
        <div className='mx-auto u-relative'>
          <div className='content'>
            {language === 'English' ? (
              <>
                <SmallHeading h2={headingTextEng} />
                <a href="https://resume.io/r/rvFXjGM9N" target='_blank' className='btn btn-info m-0'>
                  Check out my CV
                </a>
              </>
            ) : (
              <>
                <SmallHeading h2={headingTextRu} />
                <a href="https://resume.io/r/rvFXjGM9N" target='_blank' className='btn btn-info m-0'>
                  Мое резюме
                </a>
              </>
            )}
          </div>
          <section className='u-overflow-auto' style={{ maxHeight: '600px' }}>
            <div className='content py-2'>
              {language === 'English' ? (
                <>
                  <p>
                    I'm a Front End Developer based in Tbilisi, Georgia.
                    I have 1,5 years of experience as a developer ✨
                  </p>
                  <p>
                    I love working with React & TypeScript. I’m interested in
                    learning more about Vue.js and diving deeper into functional
                    programming in JavaScript!
                  </p>
                  <p>In my spare time I enjoy learning languages: 🇺🇦 🇪🇸 🇯🇵 🇫🇷</p>
                  <p>Currently working at karpov.courses</p>
                  <p>
                    Previously worked at{' '}
                    <a
                      href='https://qvant.ru/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='custom-link u u-LR'
                    >
                      Qvant/GPM Data
                    </a>{' '}
                    as a <b>Front End Vue.js Developer</b>. I helped building
                    modern interfaces for AdTech.
                  </p>
                  <p>
                    I also have worked as <b>Full Stack Developer</b> at {' '}
                    <a
                      href='https://www.moysklad.ru/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='custom-link u u-LR'
                    >
                      МойСклад
                    </a>. I was a part of the team responsible for
                    developing POS software for small business.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Я Front End разработчица с опытом работы в индустрии 1,5+ года.
                  </p>
                  <p>
                    Я полностью самоучка, поэтому радость учиться новому всегда
                    со мной. Мои главные сильные качества — это любознательность и
                    настойчивость, ведь я могу прийти на сложный стек (UI на
                    Scala 😱 ) и разобраться в нем.
                  </p>
                  <p>
                    Люблю быть частью большой команды вместе с другими
                    разработчиками, аналитиками и тестировщиками 🧑🏽‍💻 💬 👩🏼‍💻
                  </p>
                  <p>
                    Сейчас работаю в компании{' '}
                    <a
                      href='https://qvant.ru/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='custom-link u u-LR'
                    >
                      Qvant/GPM Data
                    </a>{' '}
                    на позиции Front End Vue.js Developer. Помогаю развивать
                    современные out-of-home рекламные технологии.
                  </p>
                  <p>
                    Ранее была частью команды{' '}
                    <a
                      href='https://www.moysklad.ru/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='custom-link u u-LR'
                    >
                      МойСклад
                    </a>{' '}
                    в качестве Full Stack разработчика, занималась
                    POS-приложением Касса, писала на React и TypeScript.
                  </p>
                </>
              )}
              {children}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
