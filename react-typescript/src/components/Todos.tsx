import React from "react";
import Todo from "../models/todo";

// here we are explicitly setting the generic type of React.FC
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul style={{ width: "10rem" }}>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
