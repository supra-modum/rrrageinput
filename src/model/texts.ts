import { createEvent, restore } from "effector";

export const textsMainEng = {
  heroHello: "Hi! My name is Catherine",
  heroHelloSub: "Frontend engineer. Self-taught artist.",
  homeLeadParagraphOne: "Developer with 1 year of experience in the industry.",
  homeLeadParagraphTwo: "Always passionate about learning new things ✨📘",
  homeLeadSubtitle: "Currently based in Moscow, Russia.",
};

export const textsMainRu = {
  heroHello: "Привет! Меня зовут Катя",
  heroHelloSub: "Разработчица и художница",
};

export type Languages = "English" | "Russian";

export const changeLanguage = createEvent<Languages>("change language");
export const appLanguage = restore(changeLanguage, "English");
