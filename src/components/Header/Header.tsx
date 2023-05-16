import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import Logo from '../Logo/Logo';

import './Header.scss';

const Header: React.FunctionComponent = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        <div className="navbar__right">
          <Link to="/">
            <Button color="secondary" variant="contained">
              Sign in
            </Button>
          </Link>

          <Link to="/">
            <Button color="secondary" variant="contained">
              Sign up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
