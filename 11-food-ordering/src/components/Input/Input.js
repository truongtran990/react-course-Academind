import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* get all the object input pass from the parent component: why we use the ... operator -> because the input in the parent component was pass to the children is the object dict in js -> so we using this operator to get all the value of it instead of write explicity. */}
      <input {...props.input} />
    </div>
  )
}

export default Input;