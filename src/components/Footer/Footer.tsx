import React from 'react';

import GitHubIcon from '../GitHubIcon/GitHubIcon';
import RSLogo from '../RSLogo/RSLogo';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__authors">
          <a
            className="github-link"
            href="https://github.com/britva1910"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> Britva1910
          </a>
          <a
            className="github-link"
            href="https://github.com/gru6"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> gru6
          </a>
          <a
            className="github-link"
            href="https://github.com/g0sie"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> g0sie
          </a>
        </div>

        <span className="footer__year">&copy; 2023</span>

        <a
          className="footer__rs-logo"
          href="https://rs.school/react/"
          target="_blank"
          rel="noreferrer"
        >
          <RSLogo height="1.2rem" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
