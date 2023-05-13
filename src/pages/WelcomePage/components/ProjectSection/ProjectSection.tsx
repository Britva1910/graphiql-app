import * as React from 'react';

import Button from '../../../../components/Button/Button';
import Wave from '../Wave/Wave';
import FloatingLogo from '../FloatingLogo/FloatingLogo';

import './ProjectSection.scss';

const ProjectSection: React.FunctionComponent = () => {
  const left = (
    <div className="project-section__left">
      <h1 className="project-section__title">GraphiQL</h1>
      <h2 className="project-section__subtitle">
        — a playground/IDE for GraphQL requests with authentication and authorization capabilities.
      </h2>
      <h3 className="project-section__subsubtitle">
        It allows authorized users to explore, edit and test GraphQL queries, mutations and
        subscriptions.
      </h3>
      <Button color="cyan">Try it now</Button>
    </div>
  );

  const right = (
    <div className="project-section__right">
      <FloatingLogo />
    </div>
  );

  return (
    <section className="section project-section">
      <Wave />
      <div className="project-section__content">
        {left}
        {right}
      </div>
    </section>
  );
};

export default ProjectSection;
