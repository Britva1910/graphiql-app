import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: ['en', 'pl'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: {
            project: {
              subtitle:
                '— a playground/IDE for GraphQL requests with authentication and authorization capabilities.',
            },
          },
        },
      },
      pl: {
        translation: {
          welcome: {
            project: {
              subtitle: '— IDE dla żądań GraphQL z możliwościami uwierzytelniania i autoryzacji.',
            },
          },
        },
      },
    },
  });

export default i18n;
