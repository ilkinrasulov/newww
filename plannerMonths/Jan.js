import React from "react";
import styled from "styled-components";
function jan() {
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  var numberOfDays = daysInMonth(1, 2022);
  var january = new Date("1 jan, 2022").getDay();
  var januaryOne = [];
  for (var a = 1; a < january; a++) {
    januaryOne.push(<span> </span>);
  }
  var rows = [];
  for (var i = 1; i <= numberOfDays; i++) {
    rows.push(<span>{i}</span>);
  }

  var hours = [
    "00.00",

    "01.00",

    "02.00",

    "03.00",

    "04.00",

    "05.00",

    "06.00",

    "07.00",

    "08.00",

    "09.00",

    "10.00",

    "11.00 ",

    "12.00",

    "13.00",

    "14.00",

    "15.00",

    "16.00",

    "17.00",

    "18.00",

    "19.00",

    "20.00",

    "21.00",

    "22.00",

    "23.00"
  ];

  return (
    <div>
      <Month className="Month">
        <div className="NamesOfWeek">
          <span className="DaysSpan">Mo</span>
          <span className="DaysSpan">Tu</span>
          <span className="DaysSpan">We</span>
          <span className="DaysSpan">Th</span>
          <span className="DaysSpan">Fr</span>
          <span className="DaysSpan">Sa</span>
          <span className="DaysSpan">Su</span>
        </div>

        <div className="Days">
          {januaryOne}
          {rows}
        </div>
      </Month>
      <PlanToAdd>
        {hours.map((hours, key) => (
          <div className="time">
            <span className="timeHours" id={key}>
              {hours}
            </span>
            <span class="textTime">ss</span>
          </div>
        ))}
      </PlanToAdd>
    </div>
  );
}
const Month = styled.div`
  width: 100%;
  margin: 5px auto;

  .NamesOfWeek {
    width: 70%;
    margin: 5px auto;

    gap: 20px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
  }
  .Days {
    width: 70%;

    margin: 5px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    gap: 20px;

    span {
      cursor: pointer;
    }
  }
`;
const PlanToAdd = styled.div`
  min-height: 300px;
  width: 70%;
  border: 1px solid gainsboro;
  border-radius: 12px;
  background-color: rgb(193, 219, 210, 0.1);
  margin: 20px auto;
  padding: 10px;
  display: grid;

  .time {
    justify-self: start;
    padding: 5px;

    width: 100%;
    border-bottom: 1px solid black;
  }
  .timeHours {
    border-right: 1px solid black;
  }
  .textTime {
    width: 80%;
    position: relative;
  }
`;

export default jan;
