import React from 'react';
import './ExpensesFilterResult.css';
import ExpenseItem from './ExpenseItem';

const ExpensesFilterResult = ({expenses}) => {
  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses were found!</h2>
  }
  return (
    <ul className="expenses-list">
      {
        expenses.map(expense => {
          return (
            <ExpenseItem 
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          );
        })
      }
  </ul>
  )
}

export default ExpensesFilterResult;