import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { AlertModal } from '../../components/AlertModal/AlertModal';
import { IAlertSettings } from '../../models/userData';

import './LoginPage.scss';
import { useDispatch } from 'react-redux';
import { setUser } from '../../storage/UserSlice';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [alertSettings, setAlertSettings] = useState<IAlertSettings>();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogin = (email: string, password: string): void => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        setAlertSettings({
          severity: 'success',
          message: `${t('welcome.authorization.success')}`,
        });
        openModal();
        dispatch(
          setUser({
            email: userData.user.email,
            token: userData.user.refreshToken,
            id: userData.user.uid,
          })
        );
        navigate('/main');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setAlertSettings({
            severity: 'error',
            message: `${t('welcome.authorization.wrongUser')}`,
          });
          openModal();
          console.log(error.code);
        }
      });
  };

  return (
    <div className="login-page__wrapper">
      <AuthForm handleForm={handleLogin} formTitle={t('welcome.authorization.title')} />
      {showModal && <AlertModal onClose={closeModal} settings={alertSettings}></AlertModal>}
    </div>
  );
};

export { LoginPage };
