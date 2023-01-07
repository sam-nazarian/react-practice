import React, { useState } from 'react';

// import React from 'react'; //Not needed anymore, used to be required before
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //When a toop component changes then all of the children also change
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // Same as below previously react used to be used like this, before there was JSX. JSX works like this behind the scenes (under the hood).
  // return React.createElement('div', {}, React.createElement('h2', {}, `Let's get started!`), React.createElement(Expenses, { items: expenses }));

  // react is 'declarative' not 'impretive'
  // custom component starts with a capital letter
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
