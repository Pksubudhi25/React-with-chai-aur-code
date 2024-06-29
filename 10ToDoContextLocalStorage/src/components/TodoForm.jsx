import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

function TodoForm() {
  // State to hold the current value of the input field
  const [todo, setTodo] = useState("");

  // Get the addTodo function from context
  const { addTodo } = useTodoContext();

  // Function to handle form submission
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    // Add the new todo using the addTodo function from context
    addTodo({ todo: todo, completed: false });
    // Clear the input field
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
