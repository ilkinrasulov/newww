import styled from "styled-components";
import React, { useState } from "react";

function AddNumber() {
  const [defaultState, changedState] = useState(0);
  const PlusNumber = () => changedState(defaultState + 1);

  const MinusNumber = () => changedState(defaultState - 1);

  return (
    <AddNumberProject>
      <h6>Project for Adding Numbers</h6>
      <div className="Adder">
        <button onClick={PlusNumber}>+</button>
        <span id="counter">{defaultState}</span>
        <button onClick={MinusNumber}>-</button>
      </div>
    </AddNumberProject>
  );
}

const AddNumberProject = styled.div`
  width: 250px;
  height: 200px;

  background-color: gainsboro;

  display: flex;
  flex-direction: column;
  margin: 10px auto;
  h6 {
    text-align: center;

    align-items: center;
    padding: 20px auto;
  }
  .Adder {
    margin: 30px auto;
    width: 60%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    padding: auto 20px;
    border: 1px solid grey;
    align-items: center;
  }
`;
export default AddNumber;
