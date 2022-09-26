import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import './Loading.css';

const Loading = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [0.75, 1, 1, 0.75, 0.75],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      transition: {
        duration: 1.75,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0.67,
      },
    });
  }, [controls]);

  return (
    <motion.div className='loading' animate={controls}>
      <img className='loading__icon' src='/logo192.png' alt='random-beer' />
    </motion.div>
  );
};
export default Loading;
