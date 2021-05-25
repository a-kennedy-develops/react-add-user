import styles from "./AddedUsers.module.scss";

const AddedUser = (props) => {
  let textContent = `${props.userName} (${props.userAge} years old)`;

  return <div className={styles["added-user"]}>{textContent}</div>;
};

export default AddedUser;
