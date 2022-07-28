import {useState} from 'react';

import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";


const INITIAL_EXPENSES = [
  {
    id: 1,
    date: new Date(2022, 3, 22),
    title: 'Protect your car',
    amount: 14324,
  },
  {
    id: 2,
    date: new Date(2022, 3, 22),
    title: 'Skin care',
    amount: 1234.1234,
  },
  {
    id: 3,
    date: new Date(2022, 3, 22),
    title: 'Clean car',
    amount: 18734.1243,
  },
  {
    id: 4,
    date: new Date(2022, 3, 22),
    title: 'Restore old parts',
    amount: 12143.1243,
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(previousState => [expense, ...previousState]);
  };
  
  return (
    <div>
      <h1>Let's get started!</h1>
      <NewExpense onAddNewExpense={addExpenseHandler}/>

      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
