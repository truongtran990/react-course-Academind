import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {

  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const titleChangeHandler = (event) => {
    console.log(`${event.target.value}`);
    setInputTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    console.log(`${event.target.value}`);
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log(`${event.target.value}`);
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    // prevent default behind the scense of the browser that is reload the web page.
    event.preventDefault();
    const dataInput = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate)
    }
    console.log(dataInput);
    setInputTitle('');
    setInputAmount('');
    setInputDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date"
            min="2018-01-01" max="2030-12-31" onChange={dateChangeHandler}>
          </input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;