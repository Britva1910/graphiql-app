import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: ['en', 'ru'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: {
            authorization: {
              title: 'Sign in',
              successLogin: 'Welcome!',
              successReg: 'You have been successfully registered. Please login',
              invalidReg: 'Ooops...',
              regTitle: 'Sign up',
              wrongUser: 'This user does not exist. Please check the entered data or register',
              emailLabel: 'Email',
              emptyEmail: 'Please enter your email',
              invalidEmail: 'Please enter correct email',
              passwordLabel: 'Password',
              emptyPassword: 'Please enter your password',
              invalidPassword:
                'Minimum 8 symbols, at least one letter, one digit, one special character',
              submit: 'Submit',
            },
            header: {
              main: 'Main page',
              signOut: 'Sign out',
              signIn: 'Sign in',
              signUp: 'Sign Up',
            },
            project: {
              subtitle:
                '— a playground/IDE for GraphQL requests with authentication and authorization capabilities.',
              text: 'It allows authorized users to explore, edit and test GraphQL queries, mutations and subscriptions.',
              callToAction: 'Try it now',
              team: 'Meet our team!',
            },
            footer: {
              text: 'We made this project for',
              link: 'React Course',
              preposition: 'in',
            },
          },
          main: {
            schema: 'GraphQL Schema',
            show: 'Show',
            var: 'Variables',
            head: 'Headers',
          },
        },
      },
      ru: {
        translation: {
          welcome: {
            authorization: {
              title: 'Авторизация',
              success: 'Добро пожаловать!',
              successReg: 'Вы зарегистрированы. Войдите в свой профиль.',
              invalidReg: 'Ой...',
              regTitle: 'Регистрация',
              wrongUser: 'Такой пользователь не существует. Проверьте ввод или зарегистрируйтесь.',
              emailLabel: 'Почта',
              emptyEmail: 'Введи почту',
              invalidEmail: 'Введи правильный адрес почты',
              passwordLabel: 'Пароль',
              emptyPassword: 'Введи пароль',
              invalidPassword: 'Минимум 8 символов, из них одна буква, одна цифра, один спецсимовл',
              submit: 'Отправить',
            },
            header: {
              main: 'Главная',
              signOut: 'Выйти',
              signIn: 'Войти',
              signUp: 'Зарегистрироваться',
            },
            project: {
              subtitle:
                '— песочница/IDE для запросов GraphQL с возможностями аутентификации и авторизации.',
              text: 'Авторизованные пользователи могут изучать, редактировать и тестировать запросы GraphQL, мутации и подписки.',
              callToAction: 'Попробовать',
              team: 'Наша команда!',
            },
            footer: {
              text: 'Это все возможно благодаря',
              link: 'Курс по React',
              preposition: 'от',
            },
          },
          main: {
            schema: 'GraphQL схема',
            show: 'Показать',
            var: 'Переменные',
            head: 'Заголовки',
          },
        },
      },
    },
  });

export default i18n;
