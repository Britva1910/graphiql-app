import React from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AuthForm } from '../../components/AuthForm/AuthForm';

const LoginPage = () => {
  const handleLogin = (email: string, password: string): void => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(auth);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getToken = async () => {
    const auth = getAuth();
    const userToken = auth.currentUser?.getIdToken();
    console.log(userToken);
  };

  const chackUser = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
  };

  const singOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('sing out successful');
      })
      .catch(() => {
        // An error happened.
      });
  };

  //event subs
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
    <>
      <AuthForm handleForm={handleLogin} formTitle="Login" />

      <button onClick={getToken}>Get token</button>

      <button onClick={chackUser}>Chack user</button>

      <button onClick={singOut}>Sing out</button>
    </>
  );
};

export { LoginPage };
