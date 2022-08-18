import { useEffect, useState } from 'react';

import '../index.css';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [touchedNameInput, setTouchedNameInput] = useState(false);
  
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && touchedNameInput;

  let isFormValid = false;
  if (enteredNameIsValid) {
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

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setTouchedNameInput(true);
    // Check if the input value is valid or not
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setTouchedNameInput(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
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
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
