import React from 'react'
import Card from '../UI/Card';

const UserItem = (props) => {
  return (
    <Card>
      <li>
          {props.username} ({props.age} years old)
      </li>
    </Card>
  )
}

export default UserItem;