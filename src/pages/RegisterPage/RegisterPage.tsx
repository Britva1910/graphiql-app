import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from '../../components/AuthForm/AuthForm';

const RegisterPage = () => {
  const handleSingUp = (email: string, password: string): void => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <AuthForm handleForm={handleSingUp} formTitle="Sing up" />
    </>
  );
};

export { RegisterPage };
