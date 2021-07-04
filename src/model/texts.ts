import { createEvent, createStore } from 'effector';
import connectLocalStorage from 'effector-localstorage/sync';

export enum textMainPageEng {
  t1 = 'Hi! My name is Catherine',
  t2 = 'Front End Developer & Self-taught artist.',
  t3 = 'Developer with 2 years of experience in the industry.',
  t4 = 'Always passionate about learning new things ✨📘',
  t5 = 'Currently based in Moscow, Russia.',
  t6 = 'If you fancy a chat feel free to drop a line 😎',
}

export enum textMainPageRu {
  t1 = 'Привет! Меня зовут Катя',
  t2 = 'Front End Developer & художница',
  t3 = 'Front End разработчица из Москвы с опытом работы в индустрии 2 года.',
  t4 = 'Умею работать в больших командах вместе с другими разработчиками, аналитиками и тестировщиками.',
  t5 = 'Всегда рада учиться новому ✨ 📘',
  t6 = 'Контакты 😎',
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
