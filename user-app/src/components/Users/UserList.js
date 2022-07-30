import React from 'react'
import Card from '../UI/Card';
import UserItem from './UserItem';

const UserList = (props) => {
  return (
    <Card>
      <div style={{'listStyleType': 'none'}}>
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
      </div>
    </Card>
  )
}

export default UserList;