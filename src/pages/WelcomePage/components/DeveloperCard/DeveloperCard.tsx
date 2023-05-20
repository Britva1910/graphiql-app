import React from 'react';

import './DeveloperCard.scss';

interface DeveloperCardProps {
  firstName: string;
  lastName: string;
  githubUsername: string;
}

const DeveloperCard: React.FunctionComponent<DeveloperCardProps> = (props) => {
  const fullName = `${props.firstName} ${props.lastName}`;
  const githubFullURL = `https://github.com/${props.githubUsername}`;
  const githubShortURL = `github.com/${props.githubUsername}`;

  const firstNameProperty = (
    <p className="developer-card__property">
      <span className="text-cyan">first-name</span>
      <span>:</span>
      <span className="text-green"> {props.firstName}</span>;
    </p>
  );

  const lastNameProperty = (
    <p className="developer-card__property">
      <span className="text-cyan">last-name</span>
      <span>:</span>
      <span className="text-green"> {props.lastName}</span>;
    </p>
  );

  const githubProperty = (
    <p className="developer-card__property">
      <span className="text-cyan">github</span>
      <span>:</span>
      <span className="text-red">
        {' '}
        url(
        <a className="text-orange" href={githubFullURL} target="_blank" rel="noreferrer">
          {githubShortURL}
        </a>
        )
      </span>
      ;
    </p>
  );

  return (
    <div className="developer-card">
      <div className="developer-card__header">
        <code>
          <h3 className="developer-card__name">{fullName}</h3>
        </code>
      </div>

      <div className="developer-card__content">
        <code>
          <p>
            <span className="text-blue">.information </span>
            <span>&#123;</span>
          </p>
          {firstNameProperty}
          {lastNameProperty}
          {githubProperty}
          <span>&#125;</span>
        </code>
      </div>
    </div>
  );
};

export default DeveloperCard;
