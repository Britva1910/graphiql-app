import React from 'react';

import DeveloperCard from '../DeveloperCard/DeveloperCard';

import './TeamSection.scss';

const TeamSection: React.FunctionComponent = () => {
  return (
    <section className="team-section">
      <div className="section__inner">
        <h2 className="team-section__heading">Meet our team!</h2>
        <DeveloperCard firstName="Małgorzata" lastName="Derkacz" githubUsername="g0sie" />
      </div>
    </section>
  );
};

export default TeamSection;
