import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

function ToDo(props) {
  const updateItem = () => {
    let updatedText = prompt("Enter the updated text:", props.dataItem.text);
    if (updatedText !== null) {
      axios
        .put(
          `https://todo-app-api-qkpj.onrender.com/todo/update/${props.dataItem._id} `,
          {
            text: updatedText,
          }
        )
        .then((res) => {
          console.log(res.data);
          props.showData(props.messageTodo);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const deleteItem = () => {
    axios
      .delete(
        `https://todo-app-api-qkpj.onrender.com/todo/delete/${props.dataItem._id}`
      )
      .then((res) => {
        console.log(res);
        props.showData(props.messageTodo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="todo">
      <div className="text">{props.dataItem.text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateItem} />
        <AiFillDelete className="icon" onClick={deleteItem} />
      </div>
    </div>
  );
}

export default ToDo;
