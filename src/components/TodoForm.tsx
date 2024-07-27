/* eslint-disable react/react-in-jsx-scope */

import React, { ChangeEvent, FormEvent } from "react"

interface TodoFormProps {
  text: string,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent) => void;
}


const TodoForm: React.FC<TodoFormProps> = ({ text, handleChange, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} placeholder="What is next?" required/>
        <button type="submit">Add Todo</button>
      </form>
    </>
  )
}

export default TodoForm