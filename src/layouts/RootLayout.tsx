import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import './RootLayout.scss';

const RootLayout: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
