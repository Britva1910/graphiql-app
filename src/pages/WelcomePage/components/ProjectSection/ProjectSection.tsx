import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../../../../components/Button/Button';
import Wave from '../Wave/Wave';
import FloatingLogo from '../FloatingLogo/FloatingLogo';

import './ProjectSection.scss';

const ProjectSection: React.FunctionComponent = () => {
  const { t } = useTranslation();

  const left = (
    <div className="project-section__left">
      <h1 className="project-section__title">GraphiQL</h1>
      <h2 className="project-section__subtitle">{t('welcome.project.subtitle')}</h2>
      <h3 className="project-section__subsubtitle">{t('welcome.project.text')}</h3>
      <Link to="/main">
        <Button color="cyan">{t('welcome.project.callToAction')}</Button>
      </Link>
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
      <div className="project-section__content section__inner">
        {left}
        {right}
      </div>
    </section>
  );
};

export default ProjectSection;
