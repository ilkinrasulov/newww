import React from "react";
import styled from "styled-components";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function FindName() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <FindSomeone>
      <form>
        <input
          type="text"
          placeholder="Find Someone"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}>
              {val.first_name}
            </div>
          );
        })}
      </form>
    </FindSomeone>
  );
}
const FindSomeone = styled.div`
  background-color: orange;
  width: 300px;
  height: auto;
  min-height: 500px;
  display: flex;
  margin: 10px auto;
  form {
    width: 100%;
    height: auto;
    input[type="text"] {
      text-align: center;
      padding: 5px auto;
      margin: 5px auto;
      margin-left: auto;
      margin-top: 30px;
      wdith: 300px;
      height: 20px;
    }
    .user {
      padding: 3px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;

export default FindName;
