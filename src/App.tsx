"use client";
import { TodoList } from "./TodoList";
import { NewTodoForm } from "./newTodoForm";
import "./style.css";
import {
  Key,
  useEffect,
  useState,
} from "react";

export default function App() {
  // po deafualutu cemo imati empty array
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
  // ne vraca nista ali vraca func kao argument
  useEffect(() =>{
// svaki put kad se todo promjeni pokreni ovaj kod
localStorage.setItem("ITEMS",JSON.stringify(todos));
  }, [todos])

  function addTodo(title: String) {
    setTodos((currentTodos: any) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });

    throw new Error("Function not implemented.");
  }

  function toggleTodos(id: Key | null | undefined, completed: boolean): void {
    setTodos((currentTodos: any[]) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
    throw new Error("Function not implemented.");
  }

  function deleteTodos(id: Key | null | undefined): void {
    setTodos((currentTodos: any[]) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  // Unutar forme cu renderati sve što mi treba za bassiccly html fomr
  return (
    // (<>) se zove fragment, a fragmet mozemo reci da je samo prazan tag
    <>
      <NewTodoForm onSubmitt={addTodo} />
      <h1 className="header"> To do List</h1>
      <TodoList todos={todos} toggleTodos={toggleTodos} deleteTodos={deleteTodos}/>
    </>
  );
}
