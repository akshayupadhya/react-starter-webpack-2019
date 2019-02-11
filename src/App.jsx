import React, { useState, useEffect } from "react";
import styles from "./app.scss";
export const App = ({ message }) => {
  const [todos, modifyTodo] = useState(["ds", "sasdsnss", "dsansjd"]);
  const DeleteTodo = id => {
    modifyTodo(todos.filter((i, j) => j !== id));
  };
  return (
    <div className={styles.app}>
      <p>todo app</p>
      {todos.map((i, j) => (
        <p key={j} onClick={() => DeleteTodo(j)} className={styles.toDo}>
          {i}
        </p>
      ))}
    </div>
  );
};
