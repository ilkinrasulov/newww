import React from "react";
import january from "../plannerImages/january.png";
import february from "../plannerImages/february.png";
import march from "../plannerImages/march.png";
import april from "../plannerImages/april.png";
import may from "../plannerImages/may.png";
import june from "../plannerImages/june.png";
import july from "../plannerImages/july.png";
import august from "../plannerImages/august.png";
import september from "../plannerImages/september.png";
import october from "../plannerImages/october.png";
import november from "../plannerImages/november.png";
import december from "../plannerImages/december.png";
import { Routes, Route, Link } from "react-router-dom";
import Jan from "../plannerMonths/Jan";
import styled from "styled-components";
function PlannerHeader() {
  return (
    <PlannerAll>
      <Link to="../plannerMonths/Jan">
        <img src={january} className="month" />
      </Link>
      <img src={february} className="month" />
      <img src={march} className="month" />
      <img src={april} className="month" />
      <img src={may} className="month" />
      <img src={june} className="month" />
      <img src={july} className="month" />
      <img src={august} className="month" />
      <img src={september} className="month" />
      <img src={october} className="month" />
      <img src={november} className="month" />
      <img src={december} className="month" />
      <Routes>
        <Route path="/Jan" element={<Jan />} />
      </Routes>
    </PlannerAll>
  );
}
const PlannerAll = styled.div`
  width: 80%;
  height: 300px;
  margin: 25px auto;

  .month {
    width: 21%;
    aspect-ratio: 1 / 1;
    background-color: white;
    margin: 5px;
    cursor: pointer;
  }
`;
export default PlannerHeader;
