import { useState, useEffect } from 'react';


const useCounter = (forward=true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setCounter((previousCounter => previousCounter + 1));
      } else {
        setCounter((previousCounter => previousCounter - 1));
      }
    }, 1000);
  
    return () => {
      clearInterval(interval);
    }
  }, [forward]);

  return counter;
};

export default useCounter;