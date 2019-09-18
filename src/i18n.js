import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/translation';
import translationDE from './locales/de/translation';
// import commonEN from './locales/en/common';
// import commonDE from './locales/de/common';

// the translations
const resources = {
  en: {
    translation: translationEN,
    // common: commonEN
  },
  de: {
    translation: translationDE,
    // common: commonDE
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;