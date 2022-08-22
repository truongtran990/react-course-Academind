import { useState } from 'react';

import '../index.css';
import useInput from '../hooks/use-input';


const SimpleInput = (props) => {

  const {
    value: enteredName, 
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    changeValueHandler: nameChangeHandler,
    blurValueHandler: nameBlurHandler,
    reset: resetEnteredNameInput,
  
  } = useInput((value) => value.trim() !== '');
  const {
    value: enteredEmail, 
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    changeValueHandler: emailChangeHandler,
    blurValueHandler: emailBlurHandler,
    reset: resetEnteredEmailInput,
  } = useInput((value) => value.includes('@'));


  let isFormValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    isFormValid = true;
  };
  

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log('Starting submit...');
    resetEnteredNameInput();
    resetEnteredEmailInput();
    console.log('Ending submit');
  };

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          id='name' 
          type='text'
          value={enteredName} 
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {
          nameInputHasError && <p className='error-text'>Name must not be empty!</p>
        }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input 
          id='email' 
          type='email'
          value={enteredEmail} 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {
          emailInputHasError && <p className='error-text'>Please enter a valid email!</p>
        }
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
