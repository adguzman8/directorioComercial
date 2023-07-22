import React from 'react';
import './App.css';
import logo from'../src/img/parayaa_logo.png';
import {Home} from './Home';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Cliente } from './Cliente';
import { Restaurantes } from './Restaurantes';
import { Servicios } from './Servicios';

function App() {
  return (
    <React.Fragment> 
      <HashRouter>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="tienda/:tiendaId" element={<Cliente/>}></Route>
        <Route exact path="restaurante/:tiendaId" element={<Cliente/>}></Route>
        <Route exact path="restaurante" element={<Restaurantes/>}></Route>
        <Route exact path="servicios" element={<Servicios/>}></Route>
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
