/* eslint-disable react/react-in-jsx-scope */

import { ChangeEvent, FormEvent, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { type Todo } from "./types/Todo";

const todos = [
  {
    id: 1, 
    title: 'Leer',
    isDone: false,
  },
  {
    id: 2, 
    title: 'Entrenar',
    isDone: false,
  },
  {
    id: 3, 
    title: 'Cocinar',
    isDone: false,
  }
]


const App = (): JSX.Element => {

  // STATE HOOKS
  const [todos, setTodo] = useState<Todo[]>([])
  const [text, setText] = useState<string>('')

  // HANDLER EVENT FUNCTIONS & TOGGLER
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTodo([...todos, 
      {
        id: todos.length + 1,
        title: text,
        isDone: false
      }
    ])
    setText('');
  }

  const checkTodo = (id: number) => {
    setTodo(todos => 
      todos.map(todo => 
        todo.id === id ? {...todo, isDone: true} : todo
      ))
  }

  const deleteTodo = (id: number) => {
    setTodo(todos => 
      todos.filter(todo => todo.id !== id)
    )
  }

  return (
    <>
      <TodoForm text={text} handleChange={handleChange} handleSubmit={handleSubmit}/> 
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    </>
  )
};

export default App;
