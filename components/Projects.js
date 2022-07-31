import React from "react";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import AddNumber from "../projects/AddNumber";
import LeftTime from "../projects/LeftTime";
import TemperatureChange from "../projects/TemperatureChange";
import FindName from "../projects/FindName";
import ToDo from "../projects/ToDo";
import Planner from "../projects/Planner";

function Projects() {
  return (
    <>
      <ProjectNames id="ProjectNames">
        <h3>Projects</h3>
        <span>
          {" "}
          <Link to="../projects/AddNumber">1. Add a Number</Link>
        </span>
        <span>
          {" "}
          <Link to="../projects/LeftTime">2. How many days left? </Link>
        </span>
        <span>
          {" "}
          <Link to="../projects/TemperatureChange">3. Change Temperature </Link>
        </span>
        <span>
          {" "}
          <Link to="../projects/FindName">4. Find the Date from list </Link>
        </span>
        <span>
          {" "}
          <Link to="../projects/ToDo">5. ToDo List </Link>
        </span>
        <span>
          {" "}
          <Link to="../projects/Planner">5. Planner </Link>
        </span>
      </ProjectNames>
      <Routes>
        <Route path="/AddNumber" element={<AddNumber />} />
        <Route path="/LeftTime" element={<LeftTime />} />
        <Route path="/TemperatureChange" element={<TemperatureChange />} />
        <Route path="/FindName" element={<FindName />} />
        <Route path="/ToDo" element={<ToDo />} />
        <Route path="/Planner" element={<Planner />} />
      </Routes>
    </>
  );
}
const ProjectNames = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 300px;
  border: 1px solid grey;
  margin: 10px auto;
  padding: 5px;
  span {
    padding: 6px;
    text-align: justify;

    a {
      text-decoration: none;
    }
  }
`;

export default Projects;
