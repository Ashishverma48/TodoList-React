import { useEffect, useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((todoItem) => todoItem.id !== id));
  };

  const updateToDo = (id, todo) => {
    setToDos((prev) =>
      prev.map((todoItem) => (todoItem.id === id ? todo : todoItem))
    );
  };

  const toggleComplete = (id) => {
    setToDos((prev) =>
      prev.map((todoItem) =>
        todoItem.id == id
          ? { ...todoItem, complete: !todoItem.complete }
          : todoItem
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setToDos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // console.log(todos);

  return (
    <TodoProvider
      value={{ todos, addToDo, deleteToDo, toggleComplete, updateToDo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="mx-auto p-10 shadow-md max-w-2xl w-full">
          <h1 className="font-bold text-3xl text-center text-cyan-400">
            ToDo List
          </h1>
          <div className="w-full mb-4 ">
            <TodoForm />
          </div>
          <div className="w-full flex flex-wrap gap-y-3">
            {todos?.map((todoItem) => (
              <div className="w-full" key={todoItem.id}>
                <TodoList todo={todoItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
