import Card from "./Card";
import Button from "./Button";
import "./UI.scss";

import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClickHandler} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClickHandler={props.onClickHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClickHandler={props.onClickHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default Modal;
