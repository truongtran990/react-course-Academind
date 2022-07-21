import React from 'react';

// Apply css file for this component in this file
import './ExpensiveItem.css';

const ExpensiveItem = () => {

  const expensiveDate = new Date(2022, 6, 22);
  const expensiveName = 'Protect your car';
  const expensivePrice = 120.23;
  return (
    <div className='expense-item'>
      <div>{expensiveDate.toLocaleDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expensiveName}</h2>
        <div className='expense-item__price'>${expensivePrice}</div>
      </div>
    </div>
  );
}

export default ExpensiveItem;