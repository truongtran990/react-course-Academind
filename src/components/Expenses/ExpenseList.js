import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  return (
    <Card Card className='expenses'>
      {
        props.expenses.map(expense => {
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
    </Card>
  )
}

export default ExpenseList;