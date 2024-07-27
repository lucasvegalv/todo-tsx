import React from "react";
import { type Todo } from "../types/Todo";

// Creamos una interfaz que describe las props que 'TodoList' recibira, en este caso, un array de 'Todo'
// 'todos' es un array de objetos que cumplen con la interfaz 'Todo'
interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// 'TodoList' es un componente funcional que recibe 'todos' como prop
const TodoList: React.FC<TodoListProps> = ({ todos, checkTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <div style={{display: 'flex', justifyContent: 'space-between'}} key={todo.id}>
          <li
            onClick={() => checkTodo(todo.id)}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.title}
          </li>
          <button onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
      ))}
      
    </ul>
  );
};

export default TodoList;
