import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  /* useEffect(() => {
    // call setFormIsValid every after the enteredEmail and enteredPassword change - Re-render UI
    // why we need use the useEffect() -> you want to trigger the setFormIsValid in just only one place for each email and password fiels are change, Dont want to call setFormIsValid at many place: in emailHandler, passwordHandler. So that is the reason for this case
    const idenfifier = setTimeout(() => {
      // After 1s at the first time render component -> clog the checking the validity: 
      console.log('Checking the validity: ', enteredEmail);
      setFormIsValid(enteredPassword.trim().length > 6 && enteredEmail.includes('@'))
    }, 1000);

    // the last time react call clean up function is: before the last keystroke -> so the last key stroke -> we have the timer in setTimeout() function -> that is the reason why we have the log that is: Checking the validity:  anhanhturong when i typing: "anhanhturong" in the web ui.
    // we have the last timer so -> after we fisnish the typing keystroke into the email or password input -> the console.log('checking the validity') will call continuously after 1 second. :).
    // now I'm understanding so clearly
    return () => {
      console.log('CLEAN UP!: ', enteredEmail);
      clearTimeout(idenfifier);
    }
  }, [enteredEmail, enteredPassword]) */
  
  useEffect(() => {
    console.log('useEffect running!')
  
    return () => {
      console.log('useEffect cleanup!')
    }
  }, []);
  

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // some time the enteredPassword is not lastest -> the setFormIsValid is not working correctly
    setFormIsValid(enteredPassword.trim().length > 6 && event.target.value.includes('@'))
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes('@'))
  };

  const validateEmailHandler = () => {
    // sometimes when youcall the setEmailIsValid, the enteredEmail is not have the lasted values -> the code is not working correctly. In this case, you can use the arrow function instead to make sure to get the lasted valued from enteredEmail state (when update state was depends on the previous state -> use the callback function is the good way). But now, we have the useReducer of react will deal with this scenario with many benifit :)
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
