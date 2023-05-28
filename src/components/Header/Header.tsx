import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { getAuth, signOut } from '@firebase/auth';
import { useScroll, useMotionValueEvent } from 'framer-motion';

import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../storage/UserSlice';
import { useAuth } from '../../hooks/use-auth';
import Logo from '../Logo/Logo';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import { useTranslation } from 'react-i18next';

import './Header.scss';

const Header: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const { isAuthorized } = useAuth();

  const { pathname } = useLocation();
  const isCurrentRouteWelcomePage = pathname === '/';

  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const buttonStyle = {
    background: '#00bfe6',
    color: '#16161f',
    ':hover': { background: '#00a2c2' },
  };

  const buttonsForAuthorized = (
    <>
      {isCurrentRouteWelcomePage && (
        <Link to="/main">
          <Button variant="contained" sx={buttonStyle}>
            {t('welcome.header.main')}
          </Button>
        </Link>
      )}

      <Link to="/">
        <Button onClick={handleSignOut} variant="contained" sx={buttonStyle}>
          {t('welcome.header.signOut')}
        </Button>
      </Link>
    </>
  );

  const buttonsForUnauthorized = (
    <>
      <Link to="/login">
        <Button variant="contained" sx={buttonStyle}>
          {t('welcome.header.signIn')}
        </Button>
      </Link>

      <Link to="/register">
        <Button variant="contained" sx={buttonStyle}>
          {t('welcome.header.signUp')}
        </Button>
      </Link>
    </>
  );

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const headerHeight = headerRef.current?.offsetHeight ?? 0;

  useMotionValueEvent(scrollY, 'change', (scrollY) => {
    setIsSticky(scrollY > headerHeight);
  });

  return (
    <header ref={headerRef} className={`header ${isSticky && 'sticky'}`}>
      <nav className="header__navbar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        <div className="navbar__right">
          <LanguageSelect />
          {isAuthorized ? buttonsForAuthorized : buttonsForUnauthorized}
        </div>
      </nav>
    </header>
  );
};

export default Header;
