import React from 'react';
import './App.css';
import logo from'../src/img/parayaa_logo.png';
import {Home} from './Home';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment> 
      <HashRouter>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
