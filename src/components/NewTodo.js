import { useState } from "react";
import "./styles.css";

function NewTodo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [updateText, setUpdateText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((key) => key.id !== id));
  };

  const doneTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(editId);
    setTodos(
      todos.map((todo) => {
        if (todo.id === editId) {
          console.log("inside", todo.id, editId, updateText);
          return {
            ...todo,
            text: updateText
          };
        }
        return todo;
      })
    );
    console.log("after mutaion", todos);
    setEdit(false);
    setEditId(null);
  };

  const editClicked = (id) => {
    setEdit(true);
    todos.forEach((key) => {
      if (key.id === id) {
        setUpdateText(key.text);
        setEditId(id);
      }
    });
  };

  return (
    <div className="App">
      {!edit ? (
        <form onSubmit={handleSubmit}>
          <input
            value={todo}
            type="text"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </form>
      ) : (
        <form onSubmit={handleUpdate}>
          <input
            value={updateText}
            type="text"
            onChange={(e) => setUpdateText(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      )}

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <div className={todo.completed ? "active" : ""}>{todo.text}</div>
            <input type="checkbox" onChange={() => doneTodo(todo.id)} />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => editClicked(todo.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewTodo
