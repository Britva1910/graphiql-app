import React, { useRef } from 'react';

import DeveloperCard from '../DeveloperCard/DeveloperCard';

import './TeamSection.scss';

const TeamSection: React.FunctionComponent = () => {
  const teamSectionRef = useRef(null);

  return (
    <section className="team-section" ref={teamSectionRef}>
      <div className="section__inner">
        <h2 className="team-section__heading">Meet our team!</h2>
        <div className="team-section__developers">
          <DeveloperCard
            firstName="Ivan"
            lastName="Lashuk"
            githubUsername="britva1910"
            dragConstraints={teamSectionRef}
          />
          <DeveloperCard
            firstName="Ilya"
            lastName="Hrushevich"
            githubUsername="gru6"
            dragConstraints={teamSectionRef}
          />
          <DeveloperCard
            firstName="Małgorzata"
            lastName="Derkacz"
            githubUsername="g0sie"
            dragConstraints={teamSectionRef}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
