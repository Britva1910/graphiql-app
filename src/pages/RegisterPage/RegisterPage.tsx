import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import { IAlertSettings } from '../../models/userData';
import { AlertModal } from '../../components/AlertModal/AlertModal';

import './RegisterPage.scss';
import { useTranslation } from 'react-i18next';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [alertSettings, setAlertSettings] = useState<IAlertSettings>();
  const { t } = useTranslation();

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
          message: `${t('welcome.authorization.successReg')}`,
        });
        openModal();
        navigate('/login');
      })
      .catch(() => {
        setAlertSettings({
          severity: 'error',
          message: `${t('welcome.authorization.invalidReg')}`,
        });
        openModal();
      });
  };
  return (
    <div className="register-page__wrapper">
      <AuthForm handleForm={handleSingUp} formTitle={t('welcome.authorization.regTitle')} />
      {showModal && <AlertModal onClose={closeModal} settings={alertSettings}></AlertModal>}
    </div>
  );
};

export { RegisterPage };
