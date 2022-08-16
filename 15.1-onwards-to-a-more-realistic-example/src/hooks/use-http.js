import React, { useEffect, useState } from 'react';


const useHttp = (requestConfigs, handleResponse) => {
  // requests have the both status is loading and error -> so we need to add 2 state in here
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // not for specific url for task endpoint -> for any endpoint -> so we can pass the url as parameter into custom hook.

  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfigs.url, {
          method: requestConfigs.method,
          headers: requestConfigs.headers,
          body: JSON.stringify(requestConfigs.body),
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      handleResponse(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendRequest
  };
};

export default useHttp;