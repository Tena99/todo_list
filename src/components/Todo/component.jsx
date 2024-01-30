import styles from "./styles.module.css";

export default function Todo({ item, onDelete }) {
  return (
    <div className={styles["todo_container"]}>
      <div className={styles["todo_list_container"]}>
        <ul className={styles["todo_list"]}>
          <li className={styles["todo_list_item"]}>
            {item}
            <span>
              <button>Edit</button>{" "}
              <button onClick={() => onDelete()}>X</button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
