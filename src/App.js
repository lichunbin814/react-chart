import './App.css';
import React, { useState, useEffect } from "react";
import MadeData from "./components/data";
import CandlesChart from './components/candles-chart';


function App() {
  const [candlesCharts, setCandlesCharts] = useState([]);

  const initCandlesCharts = () => {
    setCandlesCharts([<CandlesChart key='candlesChartKey' data={MadeData} />]);
  };

  useEffect(() => {
    initCandlesCharts();
  }, []);

  return <div className="App">{candlesCharts}</div>;
}

export default App;
