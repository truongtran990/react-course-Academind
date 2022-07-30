import React from 'react'

const UserItem = (props) => {
  return (
    <li style={{}}>
        {props.username} ({props.age} years old)
    </li>
  )
}

export default UserItem;