import React from 'react';

import RSLogo from '../../../../components/RSLogo/RSLogo';
import { useTranslation } from 'react-i18next';

import './CourseSection.scss';

const Wave = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#16161f"
      fillOpacity="1"
      d="M0,64L9.6,58.7C19.2,53,38,43,58,85.3C76.8,128,96,224,115,218.7C134.4,213,154,107,173,53.3C192,0,211,0,230,32C249.6,64,269,128,288,138.7C307.2,149,326,107,346,90.7C364.8,75,384,85,403,112C422.4,139,442,181,461,192C480,203,499,181,518,149.3C537.6,117,557,75,576,80C595.2,85,614,139,634,160C652.8,181,672,171,691,154.7C710.4,139,730,117,749,122.7C768,128,787,160,806,176C825.6,192,845,192,864,192C883.2,192,902,192,922,160C940.8,128,960,64,979,69.3C998.4,75,1018,149,1037,160C1056,171,1075,117,1094,122.7C1113.6,128,1133,192,1152,186.7C1171.2,181,1190,107,1210,69.3C1228.8,32,1248,32,1267,74.7C1286.4,117,1306,203,1325,208C1344,213,1363,139,1382,96C1401.6,53,1421,43,1430,37.3L1440,32L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"
    ></path>
  </svg>
);

const CourseSection: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="course-section">
      <div className="section__inner">
        <p className="course-section__paragraph">{t('welcome.footer.text')}</p>

        <p className="course-section__paragraph">
          ✨{' '}
          <a
            className="course-link"
            href="https://rs.school/react/"
            target="_blank"
            rel="noreferrer"
          >
            React Course
          </a>{' '}
          ✨
        </p>

        <span className="inline">
          <span className="course-section__paragraph">in</span>
          <span className="whitespace"></span>
          <RSLogo height="3rem" />
        </span>
      </div>
      {Wave}
    </section>
  );
};

export default CourseSection;
