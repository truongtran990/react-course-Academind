import React, {useState, useRef } from 'react';
import InvalidUserInputModal from '../Notifications/InvalidUserInputModal';
import Button from '../UI/Button';
import classes from './UserForm.module.css';
import Card from '../UI/Card';

const UserForm = (props) => {

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');

  // use ref instead of useState for entered user
  const enteredUsernameRef = useRef();
  const enteredAgeRef = useRef();
  const [error, setError] = useState();

  // const changeUsernameHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const changeAgeHandler = (event) => {
  //   setEnteredAge(event.target.value);  
  // }

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = enteredUsernameRef.current.value;
    const enteredAge = enteredAgeRef.current.value;
    const enteredUser = {
      username: enteredUsername,
      age: enteredAge
    };
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age (non-empty values)!'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (age > 0)!'
      })
      return;      
    }
    props.onAddNewUser(enteredUser);
    // setEnteredUsername('');
    // setEnteredAge('');
    enteredUsernameRef.current.value = '';
    enteredAgeRef.current.value = '';
  }

  const confirmHandler = () => {
    setError(null);
  }

  return (
    <div>
      <Card className={classes.input}>
        <h2>New User Form</h2>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input 
            id='username'
            type="text"
            // value={enteredUsername}
            // onChange={changeUsernameHandler}
            ref={enteredUsernameRef}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type="number"
            // value={enteredAge}
            // onChange={changeAgeHandler}
            ref={enteredAgeRef}
          />
          <Button type='submit'>Add User</Button>
        </form>

        {error && 
          <InvalidUserInputModal 
            title={error.title}
            message={error.message}
            onConfirm={confirmHandler}
          ></InvalidUserInputModal>
        }
      </Card>
    </div>
  )
}

export default UserForm;