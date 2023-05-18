import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

import { useAuth } from '../../hooks/use-auth';
import Logo from '../Logo/Logo';

import './Header.scss';

const Header: React.FunctionComponent = () => {
  const { isAuthorized } = useAuth();

  const { pathname } = useLocation();
  const isCurrentRouteWelcomePage = pathname === '/';
  const navigate = useNavigate();

  const signOut = () => {
    navigate('/');
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

      <Button onClick={signOut} color="secondary" variant="contained">
        Sign out
      </Button>
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

  return (
    <header className="header">
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
