import UserForm from './components/NewUser/UserForm';
import UserList from './components/Users/UserList';
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (enteredUser) => {
    
    setUsers(previousState => {
      const newUsers = [...previousState];
      enteredUser['id'] = Math.random().toString()
      newUsers.unshift(enteredUser);
      return newUsers;
    });
  };
  return (
    <div className="App">
      <UserForm 
        onAddNewUser={addNewUserHandler}
      />
      {users.length > 0 && <UserList users={users}/>}
    </div>
  );
}

export default App;
