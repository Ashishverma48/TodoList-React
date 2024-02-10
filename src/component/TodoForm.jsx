import React, { useState } from "react";
import { useToDo } from "../context/TodoContext";

function TodoForm() {
  const [todo, setToDo] = useState();

  const { addToDo } = useToDo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return 
    addToDo({todo,complete:false})
    setToDo('');
  };

  return (
    <form className="flex " onSubmit={handleSubmit}>
      <input
        className="w-full border outline-none rounded-l-lg border-black/10 duration-150 px-3 py-1.5"
        type="text"
        name=""
        id=""
        placeholder="ENTER TODO"
        onChange={(e)=>setToDo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg bg-green-600 text-white px-3 py-1 shrink-0"
      >
        Make Todo
      </button>
    </form>
  );
}

export default TodoForm;
