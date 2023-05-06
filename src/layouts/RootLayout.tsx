import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';

import './RootLayout.scss';

const RootLayout: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default RootLayout;
