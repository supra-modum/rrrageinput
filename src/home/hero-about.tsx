import React from 'react';
import { SmallHeading } from '../ui';

import './custom.scss';

//@ts-ignore
import resume from 'url:../assets/cv.pdf';

interface HeroAboutProps {
  language: string;
  headingTextRu: string;
  headingTextEng: string;
}
const HeroAbout: React.FC<HeroAboutProps> = ({
  language,
  headingTextRu,
  headingTextEng,
  children
}) => {
  return (
    <div className="hero-about hero bg-gray-000">
      <div className="hero-body">
        <div className="mx-auto u-relative">
          <div className="content">
            {language === 'English' ? (
              <>
                <SmallHeading h2={headingTextEng} />
                <a href={resume} target="_blank" className="cv-button btn">
                  Resume
                </a>
              </>
            ) : (
              <>
                <SmallHeading h2={headingTextRu} />
                <a href={resume} target="_blank" className="cv-button btn">
                  Мое резюме
                </a>
              </>
            )}
          </div>
          <section
            className="u-overflow-y-scroll"
            style={{ maxHeight: '800px' }}
          >
            <div className="content py-2">
              {language === 'English' ? (
                <>
                  <p>
                    I'm a Front End developer based in Moscow, Russia. I have
                    1,5+ years of experience as a developer.
                  </p>
                  <p>
                    I'm really into React & TypeScript and I'm interested in
                    functional programming approach in JavaScript. Always
                    passionate about learning new things ✨ 📘
                  </p>
                  <p>
                    Currently working at{' '}
                    <a
                      href="https://www.moysklad.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link u u-LR"
                    >
                      МойСклад
                    </a>{' '}
                    as a Full stack engineer with focus on front end
                    development. I'm a part of the team responsible for
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
                      href="https://www.moysklad.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link u u-LR"
                    >
                      МойСклад
                    </a>{' '}
                    на позиции Full Stack разработчика, занимаюсь
                    POS-приложением Касса, пишу на React и TypeScript. Помогаю
                    малому и среднему бизнесу достигать своих целей.
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
