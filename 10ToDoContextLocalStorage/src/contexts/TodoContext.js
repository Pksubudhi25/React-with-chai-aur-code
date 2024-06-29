import { createContext, useContext } from "react";

// Create a context with default values
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "To do message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Custom hook to use the TodoContext
export const useTodoContext = () => {
  return useContext(TodoContext);
};
