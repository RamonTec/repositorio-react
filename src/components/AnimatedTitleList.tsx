import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface AnimatedTitleListProps {
  titles: string[];
  delay?: number;
}
const AnimatedTitleList = ({ titles, delay = 3000 }:AnimatedTitleListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 300, friction: 20 },
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      api.start({
        to: { opacity: 0, transform: 'translateY(-20px)' },
        onRest: () => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
          api.start({
            to: { opacity: 1, transform: 'translateY(0)' },
          });
        },
      });
    }, delay);

    return () => clearInterval(timer);
  }, [titles.length, delay, api]);

  return (
    <animated.div style={springs}>
      <p className='mx-auto text-center text-2xl font-bold text-gray-800 dark:text-white'>
        {titles[currentIndex]}
      </p>
    </animated.div>
  );
};

export default AnimatedTitleList;