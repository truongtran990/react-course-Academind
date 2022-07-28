import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesFilterResult from './ExpensesFilterResult';

const ExpenseList = (props) => {

  const [selectedYear, setSelectedYear] = useState(2022);

  const selectYearHandler = (value) => {
    // props.onChangeYear(value);
    setSelectedYear(value);
  }

  const filtedByYear = props.expenses.filter(expense => {
    return expense.date.getFullYear() === selectedYear;
  });

  return (
    <div>
      <Card Card className='expenses'>
          <ExpensesFilter selectedYear={selectedYear} onChangeYear={selectYearHandler}/>
          <ExpensesFilterResult expenses={filtedByYear}/>
      </Card>
    </div>
  )
}

export default ExpenseList;