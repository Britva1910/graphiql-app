import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './Header.scss';

const Header: React.FunctionComponent = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <Link to="/" className="navbar__link">
          <Logo />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
