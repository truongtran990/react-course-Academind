import React, {useState} from 'react'
import InvalidUserInputModal from '../Notifications/InvalidUserInputModal';
import Button from '../UI/Button';
import classes from './UserForm.module.css';
import Card from '../UI/Card';

const UserForm = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const changeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log('username: ', event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);  
    console.log('age: ', event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUser = {
      username: enteredUsername,
      age: enteredAge
    };
    console.log('entereduser: ', enteredUser);
    // if (enteredUsername.trim().length > 0 && enteredAge.trim().length > 0 && +enteredAge > 0) {
    //   console.log('valid input user');
    //   props.onAddNewUser(enteredUser);
    //   setEnteredUsername('');
    //   setEnteredAge('');
    // } else {
    //   console.log('invalid input user!');
    //   setError(false);
    //   setError(true);
    //   return;
    // }
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
    console.log('valid input user');
    props.onAddNewUser(enteredUser);
    setEnteredUsername('');
    setEnteredAge('');
  }

  const confirmHandler = () => {
    setError(null);
  }

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input 
            id='username'
            type="text"
            value={enteredUsername}
            onChange={changeUsernameHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type="number"
            value={enteredAge}
            onChange={changeAgeHandler}
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