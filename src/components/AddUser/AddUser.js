import Card from "../UI/Card";
import TextInput from "../UI/TextInput";
import { useState } from "react";
import styles from "./AddUser.module.scss";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const getUserNameHandler = (value) => {
      setEnteredUserName(value);
  };

  const getAgeHandler = (value) => {
    setEnteredAge(value);
};

  return (
    <Card className={styles.container}>
      <div className="input-fields">
        <TextInput label="Username" type="text" returnInputHandler={getUserNameHandler}/>
        <TextInput label="Age (Years)" type="number" returnInputHandler={getAgeHandler}/>
      </div>
      <div className="btn-group">
        <button className="btn btn-add">Add User</button>
      </div>
    </Card>
  );
};

export default AddUser;
