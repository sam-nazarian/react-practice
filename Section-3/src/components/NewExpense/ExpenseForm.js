import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // Indepant from the state, whenver component reloads state stays same
  // Detached from life cycle of component
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  */

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value); //e.target is where the event happened

    // the prevState will always be latest state snapShot, otherwise doing too many state changes can go wrong, doesn't depend on outdated prevState snapshot
    // use when state update depends on previous state
    /*
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: e.target.value,
      };
    });
    */
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          {/* onChange also works for dropdowns, compared to onInput */}
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.1" />
          {/* two-way binding allows us to both gather, & change user input, onClick gathers data, value changes user input */}
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
