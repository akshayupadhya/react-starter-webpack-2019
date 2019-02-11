import React, { useState, useEffect } from "react";
import styles from "./app.scss";
import img from "../assets/download.jpeg";
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
      <img src={img} alt="" srcset="" />
    </div>
  );
};
