import styles from "./styles.module.css";

export default function Todo() {
  return (
    <div className={styles["todo_container"]}>
      <form className={styles["todo_form"]}>
        <input type="text"></input>
        <button>Submit</button>
      </form>

      <div className={styles["todo_list_container"]}>
        <ul className={styles["todo_list"]}>
          <li className={styles["todo_list_item"]}>To-do item</li>
        </ul>
      </div>
    </div>
  );
}
