import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import ExpensesFilter from './ExpensesFilter';

const ExpenseList = (props) => {

  const [selectedYear, setSelectedYear] = useState('2022');

  const selectYearHandler = (value) => {
    props.onChangeYear(value);
    setSelectedYear(value);
  }
  return (
    <div>
      <Card Card className='expenses'>
          <ExpensesFilter selectedYear={selectedYear} onChangeYear={selectYearHandler}/>
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
    </div>
  )
}

export default ExpenseList;