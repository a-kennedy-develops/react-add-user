import "./UI.scss";

function Card(props) {
  return (
    <div
      className={
        props.className === undefined ? "card" : "card " + props.className
      }
    >
      {props.children}
    </div>
  );
}

export default Card;
