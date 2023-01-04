import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// Every component is a js function
// only 1 root elm is allowed in a function
function ExpenseItem(props) {
  // funtion not called by us, called by event listener
  const clickHandler = () => {
    console.log('Clicked!!!!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me Please!</button>
    </Card>
  );
}

export default ExpenseItem;
