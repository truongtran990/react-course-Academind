import { useState, useEffect } from 'react';

import Card from '../components/Card';

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((previousCounter => previousCounter + 1));
    }, 1000);
  
    return () => {
      clearInterval(interval);
    }
  }, []);

  return counter;
};

export default useCounter;