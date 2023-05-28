import React from 'react';

import LogoIcon from './LogoIcon/LogoIcon';

import './Logo.scss';

const Logo: React.FunctionComponent = () => {
  return (
    <div className="logo">
      <div className="logo__icon-wrapper">
        <LogoIcon />
      </div>
      <span className="logo__text">GraphiQL</span>
    </div>
  );
};

export default Logo;
