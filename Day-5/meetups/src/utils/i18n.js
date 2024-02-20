import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";

const translations = {
  en: { welcome: "Welcome" },
  fr: { welcome: "Bienvenue" },
  // Add more languages here
};

i18n.locale = RNLocalize.getLocales()[0].languageCode;
i18n.fallbacks = true;
i18n.translations = translations;

export default i18n;
