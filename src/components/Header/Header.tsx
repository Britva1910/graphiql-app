import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { getAuth, signOut } from '@firebase/auth';
import { useScroll, useMotionValueEvent } from 'framer-motion';

import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../storage/UserSlice';
import { useAuth } from '../../hooks/use-auth';
import Logo from '../Logo/Logo';

import './Header.scss';

const Header: React.FunctionComponent = () => {
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

  const buttonsForAuthorized = (
    <>
      {isCurrentRouteWelcomePage && (
        <Link to="/main">
          <Button color="secondary" variant="contained">
            Go to main page
          </Button>
        </Link>
      )}

      <Link to="/">
        <Button onClick={handleSignOut} color="secondary" variant="contained">
          Sign out
        </Button>
      </Link>
    </>
  );

  const buttonsForUnauthorized = (
    <>
      <Link to="/login">
        <Button color="secondary" variant="contained">
          Sign in
        </Button>
      </Link>

      <Link to="/register">
        <Button color="secondary" variant="contained">
          Sign up
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
          {isAuthorized ? buttonsForAuthorized : buttonsForUnauthorized}
        </div>
      </nav>
    </header>
  );
};

export default Header;
