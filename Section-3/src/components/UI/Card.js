import './Card.css';

// Building user interface from smaller blocks is called composition
// this is a wrapper component
// value of props.children will be what's between opening & closing tags of the component
function Card(props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
