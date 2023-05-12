import React from 'react';
import './App.css';
import Main from './Main/Main';
import {  Routes, Route } from "react-router-dom";
import Rule from './rule/Rule';
import Test from './test/Test';


function App() {

  return (
    <div className="App">
      
        <Routes>
          <Route  path="/" element={<Main/>}/>
          <Route  path="/start_rule" element={<Rule/>}/>
          <Route  path="/start_test" element={<Test/>}/>
       
        </Routes>

    </div>
  );
}

export default App;
