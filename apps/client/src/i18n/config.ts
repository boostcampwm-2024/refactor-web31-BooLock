import i18next, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from './en';
import * as kr from './kr';

const resources: Resource = {
  en: {
    ...en,
  },
  kr: {
    ...kr,
  },
} as const;

i18next.use(initReactI18next).init({
  resources,
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,

  /*
   * if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
   * set returnNull to false (and also in the i18next.d.ts options)
   * returnNull: false,
   */
});
