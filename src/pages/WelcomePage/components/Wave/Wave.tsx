import { motion } from 'framer-motion';

import wave from '../../../../assets/layered-waves.svg';
import './Wave.scss';

const Wave: React.FunctionComponent = () => {
  return (
    <div className="wave">
      <motion.img
        src={wave}
        className="wave__img"
        alt=""
        transition={{
          repeat: Infinity,
          duration: 8,
          repeatDelay: 1,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        animate={{ x: [window.innerWidth * -0.25, 0] }}
      />
    </div>
  );
};

export default Wave;
