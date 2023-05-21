import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import { IAlertSettings } from '../../models/userData';
import { AlertModal } from '../../components/AlertModal/AlertModal';

import './RegisterPage.scss';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [alertSettings, setAlertSettings] = useState<IAlertSettings>();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSingUp = (email: string, password: string): void => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setAlertSettings({
          severity: 'success',
          message: 'You have been successfully registered. Please login',
        });
        openModal();
        navigate('/login');
      })
      .catch(() => {
        setAlertSettings({
          severity: 'error',
          message: 'Ooops...',
        });
        openModal();
      });
  };
  return (
    <div className="register-page__wrapper">
      <AuthForm handleForm={handleSingUp} formTitle="Sing up" />
      {showModal && <AlertModal onClose={closeModal} settings={alertSettings}></AlertModal>}
    </div>
  );
};

export { RegisterPage };
