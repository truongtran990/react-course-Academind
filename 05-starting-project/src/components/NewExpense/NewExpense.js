import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const addNewExpenseHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString()
    }
    props.onAddNewExpense(expenseData);
    setIsShowForm(false);
  };

  const clickHandler = () => {
    setIsShowForm(true);
  }

  const cancelHandler = () => {
    setIsShowForm(false);
  }
  return (
    <div className='new-expense'>
      {!isShowForm && <button onClick={clickHandler}>Add New Expense</button>}
      {isShowForm && <ExpenseForm onAddNewExpense={addNewExpenseHandler} onCancel={cancelHandler}/>}
    </div>
  )
}

export default NewExpense;