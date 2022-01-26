import React from 'react';
import { SmallHeading } from '../ui';

import './home-custom.scss';

//@ts-ignore
import cv from 'url:../assets/cv.pdf';

interface HeroAboutProps {
  language: string;
  headingTextRu: string;
  headingTextEng: string;
}
const HeroAbout: React.FC<HeroAboutProps> = ({
  language,
  headingTextRu,
  headingTextEng,
  children,
}) => {
  return (
    <div className='hero-about hero bg-gray-000'>
      <div className='hero-body'>
        <div className='mx-auto u-relative'>
          <div className='content'>
            {language === 'English' ? (
              <>
                <SmallHeading h2={headingTextEng} />
                <a href={cv} target='_blank' className='cv-button btn'>
                  Look at my CV
                </a>
              </>
            ) : (
              <>
                <SmallHeading h2={headingTextRu} />
                <a href={cv} target='_blank' className='cv-button btn'>
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
                    I'm a Front End Developer currently based in Moscow, Russia.
                    I have 1,5 years of experience as a developer.
                  </p>
                  <p>
                    I love working with React & TypeScript. I’m interested in
                    learning more about Vue.js and diving deeper into functional
                    programming in JavaScript! <br /> Yes, I'm always passionate
                    about learning new things ✨ 📘
                  </p>
                  <p>
                    Working at{' '}
                    <a
                      href='https://qvant.ru/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='custom-link u u-LR'
                    >
                      Qvant/GPM Data
                    </a>{' '}
                    as a <b>Front End Vue.js Developer</b>. I help building
                    modern interfaces for AdTech.
                  </p>
                  <p>
                    Previously worked at{' '}
                    <a
                      href='https://www.moysklad.ru/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='custom-link u u-LR'
                    >
                      МойСклад
                    </a>{' '}
                    as a <b>Full Stack Developer</b> with focus on Front End
                    development. I was a part of the team responsible for
                    developing POS software for small business.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Я Front End разработчица из Москвы с опытом работы в
                    индустрии 1,5+ года.
                  </p>
                  <p>
                    Я полностью самоучка, поэтому радость учиться новому всегда
                    со мной.
                    <br />
                    Мои главные сильные качества — это любознательность и
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
