import React from 'react';
import { useForm } from 'react-hook-form';

import { IUserAuthData } from '../../models/userData';

import './AuthForm.scss';

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

  return (
    <div className="auth-form__wrapper">
      <h2 className="auth-form__title">{formTitle}</h2>
      <form onSubmit={handleSubmit(({ email, password }) => handleForm(email, password))}>
        <div className="auth-form__text-field">
          <input
            className="text-field"
            type="text"
            {...register('email', {
              required: 'Please enter your email',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: 'Please enter correct email',
              },
            })}
          />
          {errors?.email && <p className="error__message">{errors?.email?.message as string}</p>}
          <label>Email</label>
        </div>
        <div className="auth-form__text-field">
          <input
            className="text-field"
            type="password"
            {...register('password', {
              required: 'Please enter your password',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: 'Minimum 8 symbols, at least one letter, one digit, one special character',
              },
            })}
          />
          {errors?.password && (
            <p className="error__message">{errors?.password?.message as string}</p>
          )}
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
