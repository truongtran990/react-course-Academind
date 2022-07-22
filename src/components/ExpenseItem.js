import React from 'react';
import ExpenseDate from './ExpenseDate';

// Apply css file for this component in this file
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <div className='expense-item__description'>
        <ExpenseDate date={props.date}/>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;