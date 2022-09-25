import React from "react";
import "./App.css";
import ScatterChart from "./ScatterChart";
import BarChart from "./BarChart";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route exact path="/scatterchart" element={<ScatterChart />} />

        <Route exact path="/barchart" element={<BarChart />} />
      </Routes>
    </div>
  );
}

export default App;
