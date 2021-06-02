import "./components/AddUser/AddUser.js";
import AddUser from "./components/AddUser/AddUser.js";
import AddedUsers from "./components/AddedUsers/AddedUsers";
import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const onAddUserHandler = (newUser) => {
    console.log("Adding user in App...");
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      {/* If there are no users, show nothing. If there are, populate AddedUsers component */}
      {users.length === 0 ? "" : <AddedUsers addedUsers={users} />}
    </React.Fragment>
  );
};

export default App;
