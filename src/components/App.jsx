import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItem] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleClick() {
    setItem((prevItems) => {
      return [...prevItems, todo];
    });
    setTodo("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={todo} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return <li key={index}>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
