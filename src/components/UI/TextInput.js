import "./UI.scss";

function TextInput(props) {
  const inputChangeHandler = (event) => {
    props.returnInputHandler(event.target.value);
  };

  const classes = "input-field " + props.className;
  return (
    <div className={classes}>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={inputChangeHandler}
        value={props.value}
      ></input>
    </div>
  );
}

export default TextInput;
