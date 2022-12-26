import React from 'react';
import { Routes, Switch } from "react-router-dom";
import './App.css';
import { Landing } from "./pages/landing/index"

function App() {
  return (
    <div className="App">
      <h1>Henry Food</h1>
      <br />
      <Landing />
    </div>
  );
}

export default App;
