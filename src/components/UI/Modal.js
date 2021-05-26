import "./UI.scss";
import Card from "./Card";
import Button from "./Button";
// import classes from "*.module.css";

function Modal(props) {
  let classes = "modal " + props.className;
  return (
    <div>
      <div className='overlay'></div>
      <Card className={classes}>
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="footer">
          <Button className="btn-add" onClick={props.onClickHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default Modal;
