import { createEvent, createStore } from 'effector';
import connectLocalStorage from 'effector-localstorage/sync';

export type Languages = 'English' | 'Russian';
const reset = createEvent('reset');

export const languageLocalStorage = connectLocalStorage('language').onError(
  (error) => console.log(error),
);

export const setLanguage = createEvent<Languages | string>('set language');

export const $language = createStore<Languages | string>(
  languageLocalStorage.init('English'),
)
  .on(setLanguage, (state, value) => value)
  .reset(reset);

$language.watch(languageLocalStorage);
