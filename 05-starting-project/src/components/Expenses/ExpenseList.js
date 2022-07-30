import React, {useState} from 'react';
import Card from '../UI/Card';
import './ExpenseList.css';
import ExpensesChart from './ExpensesChart';
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
          <ExpensesChart expenses={filtedByYear}/>
          <ExpensesFilterResult expenses={filtedByYear}/>
      </Card>
    </div>
  )
}

export default ExpenseList;