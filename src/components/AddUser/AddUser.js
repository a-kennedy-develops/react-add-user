import Card from "../UI/Card";
import TextInput from "../UI/TextInput";

import { useState } from "react";

import styles from "./AddUser.module.scss";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const onAddUserHandler = (event) => {
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
        <button className="btn btn-add" onClick={onAddUserHandler}>
          Add User
        </button>
      </div>
    </Card>
  );
};

export default AddUser;
