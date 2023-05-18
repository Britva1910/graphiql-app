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
    <>
      <h1>{formTitle}</h1>
      <form
        className="auth-form__wrapper"
        onSubmit={handleSubmit(({ email, password }) => handleForm(email, password))}
      >
        <div>
          <label>
            Email
            <input type="text" {...register('email')} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="text" {...register('password')} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export { AuthForm };
