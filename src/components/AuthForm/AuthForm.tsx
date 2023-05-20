import React from 'react';
import { useForm } from 'react-hook-form';

import { IUserAuthData } from '../../models/userData';

import './AuthForm.scss';

interface IAuthFormProps {
  formTitle: string;
  handleForm: (email: string, password: string) => void;
}

const AuthForm: React.FC<IAuthFormProps> = ({ handleForm, formTitle }) => {
  const { register, handleSubmit } = useForm<IUserAuthData>();

  return (
    <div className="auth-form__wrapper">
      <h2 className="auth-form__title">{formTitle}</h2>
      <form onSubmit={handleSubmit(({ email, password }) => handleForm(email, password))}>
        <div className="auth-form__text-field">
          <input className="text-field" type="text" required {...register('email')} />
          <label>Email</label>
        </div>
        <div className="auth-form__text-field">
          <input className="text-field" type="password" required {...register('password')} />
          <label>Password</label>
        </div>
        <button className="auth-form__btn" type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
};

export { AuthForm };
