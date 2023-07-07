import { useState, FormEvent } from "react";

// {} Deconstruciotns of object
export function NewTodoForm({ onSubmitt }: any) {
  // react hooks
  // po deafualutu cemo imati emtyz string
  const [newItem, setNewItem]: any = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): Array<String> {
    // preventa refresh page
    event.preventDefault();

    // posto smo rastavli kod po kompnentama napravili smo novu funkc u App.tsx addTodo dohvacamo ih preko props
    if (newItem !== "") 
      return onSubmitt(newItem);

    setNewItem("");
    throw new Error("Function not implemented.");
  }

  // function handleSubmit(event: FormEvent<HTMLFormElement>): Array<String> {
  //     // preventa refresh page
  //     event.preventDefault();

  //     //... js spread out koja ce mi dati novi array, {nova vrijednost}
  //     // ako zelim modificirati podatke koje postoje moram proslijediti funkciju za setState
  //     setTodos((currentTodos: any) => {
  //       return [
  //         ...currentTodos,
  //         { id: crypto.randomUUID(), title: newItem, completed: false },
  //       ];
  //     });
  //     setNewItem("");
  //     throw new Error("Function not implemented.");
  //   }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        {/*
        Svojstvo htmlFor postavlja ili vraća vrijednost atributa for oznake.
        Atribut for navodi na koji je element obrasca oznaka vezana.
         */}

        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          type="text"
          id="item"
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}
