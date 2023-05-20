import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from '../../components/AuthForm/AuthForm';

import './RegisterPage.scss';

const RegisterPage = () => {
  const handleSingUp = (email: string, password: string): void => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // ...
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="register-page__wrapper">
      <AuthForm handleForm={handleSingUp} formTitle="Sing up" />
    </div>
  );
};

export { RegisterPage };
