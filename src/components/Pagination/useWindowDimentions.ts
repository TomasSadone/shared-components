import { useEffect, useState } from 'react';

const getWindowDimentions = () => {
  const { innerHeight: height, innerWidth: width } = window;

  return { height, width };
};

const useWindowDimentions = () => {
  const [windowDimentions, setWindowDimentions] = useState(getWindowDimentions());

  useEffect(() => {
    const handleResize = () => setWindowDimentions(getWindowDimentions());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimentions;
};

export default useWindowDimentions;
