import React, { useState } from "react";
import { useToDo } from "../context/TodoContext";

function TodoList({ todo }) {
  const { updateToDo, toggleComplete, deleteToDo } = useToDo();
  const [todoMsg, setTodoMsg] = useState(todo?.todo);
  const [isTodoEditable, setIsToDoEditable] = useState(false);

  const editTodo = () => {
    updateToDo(todo.id, { ...todo, todo: todoMsg });
    setIsToDoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  console.log(todo?.complete);
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.complete}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.complete ? "line-through" : ""}`}
        readOnly={!isTodoEditable}
      />
      <button
        className="rounded border-black/10 inline-flex w-8 h-8 justify-center items-center shrink-0 disabled:opacity-50 bg-gray-50 hover:bg-gray-100"
        onClick={() => {
          if (todo.complete) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsToDoEditable((prev) => !prev);
          }
        }}
        disabled={todo.complete}
      >
        {isTodoEditable ? "📁" : "🖋️"}
      </button>
      <button
        className="rounded border-black/10 inline-flex w-8 h-8 justify-center items-center shrink-0  bg-gray-50 hover:bg-gray-100"
        onClick={() => deleteToDo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoList;
