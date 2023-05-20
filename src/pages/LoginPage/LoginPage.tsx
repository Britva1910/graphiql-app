import React from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm';

import './LoginPage.scss';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string): void => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log('User loged', uid);
    } else {
      console.log('User NOT auth');
    }
  });

  return (
    <div className="login-page__wrapper">
      <AuthForm handleForm={handleLogin} formTitle="Login" />
    </div>
  );
};

export { LoginPage };
