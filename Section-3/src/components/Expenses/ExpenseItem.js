import React, { useState } from 'react'; //useState is a react hook
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// Every component is a js function
// only 1 root elm is allowed in a function
function ExpenseItem(props) {
  // whenver state is updated react re-evaluates the component instance
  const [title, setTitle] = useState(props.title); //default state as param

  // funtion not called by us, called by event listener
  const clickHandler = () => {
    setTitle('Updated!'); //async func
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me Please!</button>
    </Card>
  );
}

export default ExpenseItem;
