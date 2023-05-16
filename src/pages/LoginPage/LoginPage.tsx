import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from '../../components/AuthForm/AuthForm';

const LoginPage = () => {
  const handleLogin = (email: string, password: string): void => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <AuthForm handleForm={handleLogin} formTitle="Login" />
    </>
  );
};

export { LoginPage };
