import { useState } from 'react';



const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouchedValueInput, setIsTouchedValueInput] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && isTouchedValueInput;

  
  const changeValueHandler = (event) => {
    setEnteredValue(event.target.value);
    console.log('enteredName: ', event.target.value)
  };
  const blurValueHandler = (event) => {
    console.log('on blur')
    setIsTouchedValueInput(true);
  };
  const reset = () => {
    setEnteredValue('');
    setIsTouchedValueInput(false);
  }


  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    changeValueHandler,
    blurValueHandler,
    reset,
  }
};

export default useInput;