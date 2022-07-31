import React from "react";
import styled from "styled-components";
import { useState } from "react";
function ToDo() {
  const [inp, inpSet] = useState();
  const [array, arraySet] = useState([]);

  const handler = (e) => {
    e.preventDefault();
    if (inp.length > " ") {
      console.log(inp);
      arraySet((oldArray) => [...oldArray, inp]);
      console.log(array);
      inpSet("");
    } else if (inp.length === 0) {
      alert("this field cannot be empty");
    }
  };

  const exit = (event) => {
    var exitee = event.target.previousElementSibling.textContent;
    console.log(exitee);
    for (item in array) {
      if (toString(array[item]) === toString(exitee)) {
        console.log(array);
        console.log(item);
        array.splice(item, 1);

        break;
      } else if (array[item] !== exitee) {
        console.log(exitee);
      }
    }
  };

  return (
    <ToDoList>
      <div>
        <form onSubmit={handler}>
          <input
            autocomplete="off"
            id="delete"
            placeholder="Enter Activity..."
            value={inp}
            type="text"
            onChange={(event) => inpSet(event.target.value)}
          />
          <input type="submit" />
        </form>
        {array.map((e) => (
          <Items>
            <div className="item">
              <span className="itemText">{e} </span>
              <span className="exit" onClick={exit}>
                x
              </span>
            </div>
          </Items>
        ))}
      </div>
    </ToDoList>
  );
}
const ToDoList = styled.div`
  width: 300px;
  min-height: 400px;
  background-color: orange;
  margin: 10px auto;
  border-radius: 15px;

  form {
    display: flex;
    flex-direction: column;
    margin: 5px auto;
    align-items: center;

    input[type="text"] {
      margin-top: 20px;
      height: 23px;
      width: 80%;
    }
    input[type="submit"] {
      width: 150px;
      margin-top: 10px;
      padding: 7px;
      background-color: green;
      color: white;
      border: 0;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;
const Items = styled.div`
  margin: 1px auto;
  width: 100%;
  min-height: 40px;
  .item {
    width: 92%;
    height: 30px;
    background-color: white;

    border-radius: 12px;
    text-align: center;
    line-height: 30px;
    overflow-y: auto;
    margin: 0.5px auto;
  }
  .itemText {
    max-width: 50%;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: center;
    line-height: 30px;
    color: black;
    font-family: arial;
    font-weight: 530;
    margin: 0.5px auto;
  }
  .exit {
    float: right;
    cursor: pointer;
    margin-right: 10px;
    background-color: white;
    line-height: 25px;
    width: 5%;
    position: sticky;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
  }
`;
export default ToDo;
