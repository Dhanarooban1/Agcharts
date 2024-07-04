import React from "react";
import Navbar from "./Compound/Navbar";
import SimpleBoxPlot from "./Compound/SimpleBoxPlot";
import Chart from "./Compound/Chart";
import MultipleBoxPlots from "./Compound/MultipleBoxPlots";
import Waterfall from "./Compound/Waterfall";
import HorizontalBoxPlot from "./Compound/HorizontalBoxPlot";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Navbar />  
        <Routes>
          <Route path="/" element={<Chart />} />
          <Route path="/simple-box-plot" element={<SimpleBoxPlot />} />
          <Route path="/waterfall" element={<Waterfall />} />
          <Route path="/HorizontalBoxPlot" element={<HorizontalBoxPlot />} />
          <Route path="/MultipleBoxPlots" element={<MultipleBoxPlots />} />
        </Routes>
    </>

  );
};

export default App;