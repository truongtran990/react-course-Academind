import React from 'react';

// Apply css file for this component in this file
import './ExpensiveItem.css';

const ExpensiveItem = () => {
  return (
    <div className='expense-item'>
      <div>30 March</div>
      <div className='expense-item__description'>
        <h2>Protect your car</h2>
        <div className='expense-item__price'>$20 Mil</div>
      </div>
    </div>
  );
}

export default ExpensiveItem;