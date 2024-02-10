import { useContext, createContext } from "react";

export const ToDoContext = createContext({
  todos: [{ id: 1, todo: "First Todo", complete: false }],
  addToDo: (todo) => {},
  updateToDo: (id, toDo) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const TodoProvider = ToDoContext.Provider;
