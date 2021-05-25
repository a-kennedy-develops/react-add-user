import Card from "../UI/Card";
import AddedUser from "./AddedUser";

import styles from "./AddedUsers.module.scss";

const AddedUsers = (props) => {
  return (
    <Card className={styles.container}>
      <ul className={styles["added-user-list"]}>
      {props.addedUsers.map((user) => (
        <AddedUser
          key={user.id}
          userName={user.userName}
          userAge={user.userAge}
        />
      ))}
    </ul>
    </Card>
  );
};

export default AddedUsers;
