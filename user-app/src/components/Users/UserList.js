import React from 'react'
import UserItem from './UserItem';

const UserList = (props) => {
  return (
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
  )
}

export default UserList;