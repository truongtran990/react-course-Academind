import React from 'react';

// Apply css file for this component in this file
import './ExpensiveItem.css';

const ExpensiveItem = (props) => {
  const day = props.date.toLocaleString('en-US', {day: 'numeric'});
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear();
  return (
    <div className='expense-item'>
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpensiveItem;