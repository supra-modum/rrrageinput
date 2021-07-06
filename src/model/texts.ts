import { createEvent, createStore } from 'effector';
import connectLocalStorage from 'effector-localstorage/sync';

export enum textMainPageEng {
  t1 = 'Hi! My name is Catherine',
  t2 = 'Front End Engineer',
  t3 = 'Developer with 1,5+ years of experience in the industry.',
  t4 = 'Always passionate about learning new things ✨📘',
  t5 = 'Currently based in Moscow, Russia.',
  t6 = 'If you fancy a chat feel free to drop a line 😎',
}

export enum textMainPageRu {
  t1 = 'Привет! Меня зовут Катя',
  t2 = 'Front End Engineer',
  t3 = 'Front End разработчица из Москвы с опытом работы в индустрии 1,5+ года.',
  t4 = 'Умею работать в больших командах вместе с другими разработчиками, аналитиками и тестировщиками.',
  t5 = 'Всегда рада учиться новому ✨ 📘',
  t6 = 'Есть идеи? Напишите мне! 😎',
}

export enum textCVHeaderEng {
  t1 = 'Experience & Skills 👩🏻‍💻',
}

export enum textCVHeaderRu {
  t1 = 'Опыт и навыки 👩🏻‍💻',
}

export enum textAboutMSEng {
  t1 = 'Full stack engineer with focus on front end development.',
  t2 = 'I work in the team responsible for developing POS software for small business.',
}

export enum textAboutMSRu {
  t1 = 'Работаю с фокусом на frontend-разработку в команде, ответственной за внедрение нового функционала и поддержку имеющихся возможностей POS-приложения Касса.',
}

export type Languages = 'English' | 'Russian';

export const languageLocalStorage = connectLocalStorage('language').onError(
  (error) => console.log(error),
);

export const setLanguage = createEvent<Languages | string>('set language');
const reset = createEvent('reset');

export const $language = createStore<Languages | string>(
  languageLocalStorage.init('English'),
)
  .on(setLanguage, (state, value) => value)
  .reset(reset);

$language.watch(languageLocalStorage);
