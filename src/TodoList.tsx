import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodos, deleteTodos}: any){
   return ( <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(
          (todo: {
            id: Key | null | undefined;
            completed: boolean | undefined;
            title:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined;
          }) => {
            return (
             <TodoItem {...todo} key={todo.id} toggleTodos={toggleTodos} deleteTodos={deleteTodos}/>
            );
          }
        )}
      </ul>
   )
}