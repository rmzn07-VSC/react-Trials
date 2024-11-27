import { useState, useEffect } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newContent) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, content: newContent } : todo
    ));
  };

  return (
    <div className="App">
      <br />
      <div className="appOrta" />
      <div className="OrtaninAlti">
        <TodoCreate onCreateTodo={createTodo} />
        <ToDoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      </div>
    </div>
  );
}

export default App;