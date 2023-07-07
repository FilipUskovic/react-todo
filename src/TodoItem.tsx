
export function TodoItem({id, completed, title, toggleTodos, deleteTodos}: any){
    return( 
        <li >
        <label>
          <input
            type="checkbox"
            checked={completed}
             onChange={(event) =>
               toggleTodos(id, event.target.checked)
             }
          />
          {title}
        </label>
        <button
          className="btn btn-danger"
          onClick={() => deleteTodos(id)}
        >
          Delete
        </button>
      </li>
    )
}