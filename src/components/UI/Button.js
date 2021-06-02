import "./UI.scss";

function Button(props) {
  return (
    <button
      className={
        props.className === undefined ? "btn" : "btn " + props.className
      }
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
