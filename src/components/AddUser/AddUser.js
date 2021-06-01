import Card from "../UI/Card";
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import { useState } from "react";

import styles from "./AddUser.module.scss";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [inputError, setInputError] = useState();

  const onAddUserHandler = (event) => {
    event.preventDefault();

    console.log("Adding user in AddUser..");

    if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
      setInputError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    } else if (enteredAge < 0) {
      setInputError({
        title: "Invalid input",
        message: "Please enter a numeric value of 0 or greater.",
      });
      return;
    } else {
      let newUser = {
        id: Math.random(),
        userName: enteredUserName,
        userAge: enteredAge,
      };

      props.onAddUser(newUser);
      setEnteredUserName("");
      setEnteredAge("");
    }
  };

  const getUserNameHandler = (value) => {
    setEnteredUserName(value);
  };

  const getAgeHandler = (value) => {
    setEnteredAge(value);
  };

  const onCloseModalHandler = (event) => {
    setInputError();
  };

  return (
    <div>
      {inputError && (
        <Modal
          title={inputError.title}
          message={inputError.message}
          onClickHandler={onCloseModalHandler}
        ></Modal>
      )}
      <Card className={styles.container}>
        <form onSubmit={onAddUserHandler}>
          <div className="input-fields">
            <TextInput
              label="Username"
              type="text"
              value={enteredUserName}
              returnInputHandler={getUserNameHandler}
            />
            <TextInput
              label="Age (Years)"
              type="number"
              value={enteredAge}
              returnInputHandler={getAgeHandler}
            />
          </div>
          <div className="btn-group">
            <Button type="submit" className="btn-add">
              Add User
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
