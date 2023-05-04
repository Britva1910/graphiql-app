import React from 'react';
import { Outlet } from 'react-router-dom';

import './RootLayout.scss';

const RootLayout: React.FunctionComponent = () => {
  return (
    <>
      <header className="header"></header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default RootLayout;
