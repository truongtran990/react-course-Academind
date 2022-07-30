import React from 'react';
import './AddNewExpense.css';

const AddNewExpense = (props) => {
  return (
    <div className="new-expense">
      <button type='submit' onClick={props.onClickAddNew}>Add New Expense</button>
    </div>
  )
}

export default AddNewExpense;