import "./styles.css";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Ideas from "../components/Ideas";
import AddNumber from "../projects/AddNumber";
import LeftTime from "../projects/LeftTime";
import TemperatureChange from "../projects/TemperatureChange";
import FindName from "../projects/FindName";
import ToDo from "../projects/ToDo";
import Planner from "../projects/Planner";
import Jan from "../plannerMonths/Jan";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/Projects/*" element={<Projects />} />
          <Route path="/projects/AddNumber" element={<AddNumber />} />
          <Route path="/projects/LeftTime" element={<LeftTime />} />
          <Route
            path="/projects/TemperatureChange"
            element={<TemperatureChange />}
          />
          <Route path="/projects/FindName" element={<FindName />} />
          <Route path="/projects/ToDo" element={<ToDo />} />
          <Route path="/projects/Planner" element={<Planner />} />
          <Route path="/plannerMonths/*" element={<Planner />} />

          <Route path="/plannerMonths/Jan" element={<Jan />} />

          <Route path="/Ideas" element={<Ideas />} />
        </Routes>
      </BrowserRouter>
      <Container />

      <Footer />
    </div>
  );
}
