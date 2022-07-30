import React, {useState} from 'react'
import InvalidUserInputModal from '../Notifications/InvalidUserInputModal';
import Button from '../UI/Button';
import classes from './UserForm.module.css';
import Card from '../UI/Card';

const UserForm = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isInputUserValid, setIsInputUserValid] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);

  const changeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsInputUserValid(true);
    }
    console.log('username: ', event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsInputUserValid(true);
    }    
    console.log('age: ', event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUser = {
      username: enteredUsername,
      age: enteredAge
    };
    console.log('entereduser: ', enteredUser);
    if (enteredUsername.trim().length > 0 && enteredAge.trim().length > 0) {
      console.log('valid input user');
      props.onAddNewUser(enteredUser);
      setEnteredUsername('');
      setEnteredAge('');
    } else {
      console.log('invalid input user!');
      setIsInputUserValid(false);
      setIsShowModal(true);
      return;
    }

  }

  const cancelModelHandler = () => {
    setIsShowModal(false);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input 
          type="text" 
          value={enteredUsername}
          onChange={changeUsernameHandler}
        />
        <label>Age (Years)</label>
        <input 
          type="number" 
          min='0' 
          max='100' 
          step='1' 
          value={enteredAge}
          onChange={changeAgeHandler}
        />
        <Button>Add User</Button>
      </form>

      {isShowModal && 
        <InvalidUserInputModal 
          title="Invalid input"
          message="Please enter a valid username and age (non-empty values)!"
          onCancelHandler={cancelModelHandler}
        >Ok</InvalidUserInputModal>
      }
    </Card>
  )
}

export default UserForm;