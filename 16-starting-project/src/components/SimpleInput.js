import { useEffect, useState } from 'react';

import '../index.css';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [touchedNameInput, setTouchedNameInput] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [touchedEmailInput, setTouchedEmailInput] = useState(false);
  
  // enteredNameIsValid was used to check that value was enterd is valid or not. Using it to check before click the submit button
  const enteredNameIsValid = enteredName.trim() !== '';

  // check to show the error message
  const nameInputIsInvalid = !enteredNameIsValid && touchedNameInput;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && touchedEmailInput;


  let isFormValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    isFormValid = true;
  };
  
  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
    console.log('enteredName: ', event.target.value)
  };
  const blurNameHandler = (event) => {
    console.log('on blur')
    setTouchedNameInput(true);
  };

  const changeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log('enteredEmail: ', event.target.value)
  };
  const blurEmailHandler = (event) => {
    console.log('on blur')
    setTouchedEmailInput(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setTouchedNameInput(true);
    setTouchedEmailInput(true);
    // Check if the input value is valid or not
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setTouchedNameInput(false);

    console.log(enteredEmail);
    setEnteredEmail('');
    setTouchedEmailInput(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          id='name' 
          type='text'
          value={enteredName} 
          onChange={changeNameHandler}
          onBlur={blurNameHandler}
        />
        {
          nameInputIsInvalid && <p className='error-text'>Name must not be empty!</p>
        }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input 
          id='email' 
          type='email'
          value={enteredEmail} 
          onChange={changeEmailHandler}
          onBlur={blurEmailHandler}
        />
        {
          emailInputIsInvalid && <p className='error-text'>Please enter a valid email!</p>
        }
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
