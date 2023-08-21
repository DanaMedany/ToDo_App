import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./Components/ToDo";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    showList();
  }, []);

  const showList = () => {
    axios
      .get("https://todo-app-api-qkpj.onrender.com/todo/show") 
      .then((res) => {
        setTodo(res.data.todo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    axios
      .post("https://todo-app-api-qkpj.onrender.com/todo/create", { text })
      .then((res) => {
        // console.log(res);
        setText("");
        showList(todo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1> ToDo List</h1>
      </div>
      <div className="top">
        <input
          type="text"
          placeholder="Add ToDo...."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="Click" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="list">
        {todo.map((item) => {
          return <ToDo key={item._id} dataItem={item} showData={showList} />;
        })}
      </div>
    </div>
  );
}

export default App;
