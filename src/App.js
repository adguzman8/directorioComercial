import React from 'react';
import './App.css';
import {Home} from './Home';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Cliente } from './Cliente';
import { Restaurantes } from './Restaurantes';
import { Servicios } from './Servicios';
import {NavLink} from './NavLink';
import { Footer } from './Footer';
import { Empleo } from './Empleo';

function App() {
  return (
    <React.Fragment> 
      <HashRouter>
      <NavLink/>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="restaurante/:tiendaId" element={<Cliente/>}></Route>
        <Route exact path="tienda/:tiendaId" element={<Cliente/>}></Route>
        <Route exact path="restaurante" element={<Restaurantes/>}></Route>
        <Route exact path="empleo" element={<Empleo/>}></Route>
        <Route exact path="servicios" element={<Servicios/>}></Route>
        </Routes>
        <Footer/>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
