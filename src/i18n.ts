import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones
const resources = {
  en: {
    translation: {
      hero_title: "Elevate Your Sound to Greatness",
      hero_subtitle: "Where exceptional talent meets industry expertise.",
      submit_demo: "Submit Your Demo",
      our_services: "Our Services",
    },
  },
  es: {
    translation: {
      hero_title: "Eleva tu Sonido a la Grandeza",
      hero_subtitle: "Donde el talento excepcional se une a la experiencia de la industria.",
      submit_demo: "Envía tu Demo",
      our_services: "Nuestros Servicios",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
