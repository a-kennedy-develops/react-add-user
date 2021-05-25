import Card from "../UI/Card";
import AddedUsersList from "./AddedUsersList";

import styles from "./AddedUsers.module.scss";

const AddedUsers = (props) => {
  return (
    <Card className={styles.container}>
      <AddedUsersList addedUsers={props.addedUsers} />
    </Card>
  );
};

export default AddedUsers;
