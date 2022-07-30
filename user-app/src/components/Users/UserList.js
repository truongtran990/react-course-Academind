import React from 'react'
import Card from '../UI/Card';
import UserItem from './UserItem';
import classes from './UsersList.module.css';

const UserList = (props) => {
  return (
    <div>
    <Card className={classes.users}>
      <ul>
        {
          props.users.map(user => {
            return (
              <UserItem 
                key={user.id}
                username={user.username}
                age={user.age}
              />
            )
          })
        }
      </ul>
    </Card>
    </div>
  )
}

export default UserList;

