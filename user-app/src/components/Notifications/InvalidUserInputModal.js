import React from 'react'

const InvalidUserInputModal = (props) => {
  const clickHandler = (event) => {
    props.onCancelHandler();
  }
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.message}</div>
      <button 
        type='button'
        onClick={clickHandler}
      >{props.children}</button>
    </div>
  )
}

export default InvalidUserInputModal;