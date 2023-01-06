import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        {/* ExpensesFilter is a controlled component as there's 2-way binding, both passes on & recieves value from PARENT component */}
        {props.items.map((expense) => (
          <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
        ))}

        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      </Card>
    </div>
  );
}

export default Expenses;
