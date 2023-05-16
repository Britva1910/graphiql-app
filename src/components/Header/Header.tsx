import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

import Logo from '../Logo/Logo';

import './Header.scss';

const Header: React.FunctionComponent = () => {
  // isAuthenticated state is only for now, since we don't have authentication yet
  // i'll change that later
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const location = useLocation();
  const isCurrentRouteWelcomePage = location.pathname === '/';

  const navigate = useNavigate();
  const signIn = () => setIsAuthenticated(true);
  const signOut = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  const buttonsForAuthenticated = (
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

  const buttonsForUnauthenticated = (
    <>
      <Link to="/sign-in">
        <Button onClick={signIn} color="secondary" variant="contained">
          Sign in
        </Button>
      </Link>

      <Link to="/sign-up">
        <Button onClick={signIn} color="secondary" variant="contained">
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
          {isAuthenticated ? buttonsForAuthenticated : buttonsForUnauthenticated}
        </div>
      </nav>
    </header>
  );
};

export default Header;
