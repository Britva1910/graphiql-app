import * as React from 'react';

import ProjectSection from './components/ProjectSection/ProjectSection';
import TeamSection from './components/TeamSection/TeamSection';
import CourseSection from './components/CourseSection/CourseSection';

import './WelcomePage.scss';

const WelcomePage: React.FunctionComponent = () => {
  return (
    <>
      <ProjectSection />
      <TeamSection />
      <CourseSection />
    </>
  );
};

export default WelcomePage;
