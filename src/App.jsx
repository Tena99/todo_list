import { useState } from "react";
import styles from "./App.module.css";
import Todo from "./components/Todo/component";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState([
    { id: uuidv4(), task: "Bake the cake" },
    { id: uuidv4(), task: "Buy oranges" },
    { id: uuidv4(), task: "Clean the room" },
  ]);

  const [inputValue, setInputValue] = useState("");

  function handleAddToDo() {
    setData([{ id: uuidv4(), task: inputValue }, ...data]);
  }

  function handleDeleteToDo(id) {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className={styles.container}>
        <form
          onSubmit={(event) => event.preventDefault()}
          className={styles["todo_form"]}
        >
          <input
            type="text"
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <button onClick={handleAddToDo}>Submit</button>
        </form>

        {data.map((item) => {
          return (
            <Todo
              key={item.id}
              item={item.task}
              onDelete={() => handleDeleteToDo(item.id)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
