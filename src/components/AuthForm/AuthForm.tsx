import React from 'react';
import { useForm } from 'react-hook-form';

import { IUserAuthData } from '../../models/userData';

import './AuthForm.scss';
import { useTranslation } from 'react-i18next';

interface IAuthFormProps {
  formTitle: string;
  handleForm: (email: string, password: string) => void;
}

const AuthForm: React.FC<IAuthFormProps> = ({ handleForm, formTitle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserAuthData>();
  const { t } = useTranslation();

  return (
    <div className="auth-form__wrapper">
      <h1 className="auth-form__title">{formTitle}</h1>
      <form onSubmit={handleSubmit(({ email, password }) => handleForm(email, password))}>
        <div className="auth-form__text-field">
          <input
            className="text-field"
            type="text"
            {...register('email', {
              required: `${t('welcome.authorization.emptyEmail')}`,
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: `${t('welcome.authorization.invalidEmail')}`,
              },
            })}
          />
          {errors?.email && <p className="error__message">{errors?.email?.message as string}</p>}
          <label>{t('welcome.authorization.emailLabel')}</label>
        </div>
        <div className="auth-form__text-field">
          <input
            className="text-field"
            type="password"
            {...register('password', {
              required: `${t('welcome.authorization.emptyPassword')}`,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: `${t('welcome.authorization.invalidPassword')}`,
              },
            })}
          />
          {errors?.password && (
            <p className="error__message">{errors?.password?.message as string}</p>
          )}
          <label>{t('welcome.authorization.passwordLabel')}</label>
        </div>
        <button className="auth-form__btn" type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {t('welcome.authorization.submit')}
        </button>
      </form>
    </div>
  );
};

export { AuthForm };
