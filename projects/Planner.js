import React from "react";
import styled from "styled-components";

import PlannerHeader from "../planner/PlannerHeader";
function Planner() {
  return (
    <PlannerAll>
      <PlannerHeader />
    </PlannerAll>
  );
}
const PlannerAll = styled.div`
  width: 80%;
  height: 300px;
  margin: 25px auto;
`;

export default Planner;
