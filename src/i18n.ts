import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: ['en', 'ru'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: {
            project: {
              main: 'Main page',
              signOut: 'Sign out',
              signIn: 'Sign in',
              signUp: 'Sign Up',
              subtitle:
                '— a playground/IDE for GraphQL requests with authentication and authorization capabilities.',
              text: 'It allows authorized users to explore, edit and test GraphQL queries, mutations and subscriptions.',
              callToAction: 'Try it now',
              team: 'Meet our team!',
              footer: 'We made this project for',
              schema: 'GraphQL Schema',
              show: 'Show',
              var: 'Variables',
              head: 'Headers',
              login: 'Login',
            },
          },
        },
      },
      ru: {
        translation: {
          welcome: {
            project: {
              main: 'Главная',
              signOut: 'Выйти',
              signIn: 'Войти',
              signUp: 'Зарегистрироваться',
              subtitle:
                '— песочница/IDE для запросов GraphQL с возможностями аутентификации и авторизации.',
              text: 'Авторизованные пользователи могут изучать, редактировать и тестировать запросы GraphQL, мутации и подписки.',
              callToAction: 'Попробовать',
              team: 'Наша команда!',
              footer: 'Это все возможно благодаря',
              schema: 'GraphQL схема',
              show: 'Показать',
              var: 'Переменные',
              head: 'Заголовки',
              login: 'Авторизоваться',
            },
          },
        },
      },
    },
  });

export default i18n;
