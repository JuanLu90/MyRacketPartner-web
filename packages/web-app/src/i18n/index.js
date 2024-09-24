import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEs from "./locales/es/translation.json";
import translationEn from "./locales/en/translation.json";

let language = localStorage.getItem("language");

if (!language) {
  // Si no hay ningún idioma guardado, usa el idioma del navegador
  language = navigator.language.split("-")[0];
  language = ["en", "es"].includes(language) ? language : "en";
}

i18n.use(initReactI18next).init({
  resources: {
    es: { ...translationEs },
    en: { ...translationEn },
  },
  lng: language,
  interpolation: {
    escapeValue: false,
  },
  keySeparator: ".",
});

export default i18n;
