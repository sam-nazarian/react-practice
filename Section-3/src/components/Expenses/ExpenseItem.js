import React, { useState } from 'react'; //useState is a react hook
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// Every component is a js function
// only 1 root elm is allowed in a function
function ExpenseItem(props) {
  // whenver state is updated react re-evaluates the component instance
  // handler is a funtion not called by us, called by event listener

  // stateless/presentational/dumb component

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
