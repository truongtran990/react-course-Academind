import React from 'react'
import Card from '../UI/Card';

const UserItem = (props) => {
  return (
    <Card>
      {props.username} ({props.age} years old)
    </Card>
  )
}

export default UserItem;