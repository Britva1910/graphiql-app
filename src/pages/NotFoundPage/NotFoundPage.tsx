import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import './NotFoundPage.scss';

const NotFoundPage: React.FunctionComponent = () => {
  return (
    <div className="not-found-page">
      <img
        className="sad-miku-gif"
        src="https://media.tenor.com/5--oAdlt0OwAAAAd/sad-crying.gif"
        alt="sad Hatsune Miku"
      />

      <p className="sad-miku-text">
        it makes me sad when you try to access a page that doesn&apos;t exist
      </p>

      <Link to="/">
        <Button color="red">Go away</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
