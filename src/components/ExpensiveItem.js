import React from 'react';

// Apply css file for this component in this file
import './ExpensiveItem.css';

const ExpensiveItem = (props) => {

  return (
    <div className='expense-item'>
      <div>{props.date.toLocaleDateString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpensiveItem;