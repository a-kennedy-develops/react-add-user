import Card from "../UI/Card";
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";

import { useState } from "react";

import styles from "./AddUser.module.scss";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const onAddUserHandler = (event) => {
    event.preventDefault();
    console.log("Adding user in AddUser..");
    let newUser = {
      id: Math.random(),
      userName: enteredUserName,
      userAge: enteredAge,
    };
    props.onAddUser(newUser);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const getUserNameHandler = (value) => {
    setEnteredUserName(value);
  };

  const getAgeHandler = (value) => {
    setEnteredAge(value);
  };

  return (
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
  );
};

export default AddUser;
