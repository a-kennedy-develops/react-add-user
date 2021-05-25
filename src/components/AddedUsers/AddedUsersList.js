import AddedUser from "./AddedUser";

import styles from "./AddedUsers.module.scss";

const AddedUsersList = (props) => {
  return (
    <ul className={styles["added-user-list"]}>
      {props.addedUsers.map((user) => (
        <AddedUser
          key={user.id}
          userName={user.userName}
          userAge={user.userAge}
        />
      ))}
    </ul>
  );
};

export default AddedUsersList;
