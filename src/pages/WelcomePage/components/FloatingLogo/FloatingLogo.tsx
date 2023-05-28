import React from 'react';
import { motion } from 'framer-motion';

import logo from '../../../../assets/logo691x439.png';
import './FloatingLogo.scss';

const FloatingLogo: React.FunctionComponent = () => {
  return (
    <motion.img
      className="floating-logo"
      src={logo}
      alt="logo"
      transition={{ repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', duration: 2 }}
      animate={{ y: [-15, 15] }}
    />
  );
};

export default FloatingLogo;
