import "./UI.scss";
import Card from "./Card";
import Button from "./Button";
import Wrapper from "../Helpers/Wrapper";
// import classes from "*.module.css";

function Modal(props) {
  return (
    <Wrapper>
      <div className="overlay"></div>
      <Card
        className={
          props.className === undefined ? "modal" : "modal " + props.className
        }
      >
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="footer">
          <Button className="btn-add" onClick={props.onClickHandler}>
            Okay
          </Button>
        </footer>
      </Card>
    </Wrapper>
  );
}

export default Modal;
