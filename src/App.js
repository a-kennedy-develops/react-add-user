import "./components/UI/UI.scss";
import "./components/AddUser/AddUser.js";
import AddUser from "./components/AddUser/AddUser.js";
import { useState } from "react";

const USERS_DATA = [];

const App = () => {
  const [users, setUsers] = useState(USERS_DATA);

  const onAddUserHandler = (newUser) => {
    console.log("Adding user in App...");
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  // const checkState = () => {
  //   console.log(users);
  // };

  return (
    <div className="App">
      <AddUser onAddUser={onAddUserHandler} />
      {/* <button className="btn" onClick={checkState}>Check state</button> */}
    </div>
  );
};

export default App;
