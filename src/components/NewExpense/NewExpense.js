import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const addNewExpenseHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString()
    }
    props.onAddNewExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onAddNewExpense={addNewExpenseHandler}/>
    </div>
  )
}

export default NewExpense;