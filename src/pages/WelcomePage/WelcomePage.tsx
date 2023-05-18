import * as React from 'react';

import ProjectSection from './components/ProjectSection/ProjectSection';
import TeamSection from './components/TeamSection/TeamSection';

import './WelcomePage.scss';

const WelcomePage: React.FunctionComponent = () => {
  return (
    <>
      <ProjectSection />
      <TeamSection />
    </>
  );
};

export default WelcomePage;
