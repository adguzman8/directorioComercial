import React from 'react';
import './App.css';
import {Home} from './home';
import logo from'../src/img/parayaa_logo.png';
import {useState} from 'react';
import {Quienes_somos} from './quienes_somos';
import { Contactanos } from './contactanos';
import {Restaurantes} from './restaurantes';
import {Producto} from './producto';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

    const [isActive, setIsActive]= useState(false);
    

    const handleClick=()=>{
      setIsActive(current=>!current);
      
    }
  return (
    <React.Fragment> 
      <BrowserRouter>
            
      <div className='header-container'>
            <div className='menu-list'>
                <ul>
                    <Link to='/restaurantes'><li>Restaurantes</li></Link>
                    <Link to='/tiendas'><li>Tiendas</li></Link>
                    <Link to='/servicios'><li>Servicios</li></Link>
                </ul>
            </div>
            <div className='div-logo'>
                <Link to='/'><img src={logo} alt="logo"></img></Link>
            </div>
            <div className='nav' onClick={handleClick}>
                <span className='nav-top'></span>
                <span className='nav-midle'></span>
                <span className='nav-buttom'></span>
            </div>
            <div className={isActive ? 'menu-lateral-active ':'menu-lateral '}>
              <div className='first-section'>
                <ul>
                    <Link to='/' ><li><span className='inicio-link'>Inicio</span></li></Link>
                    <Link to='/restaurantes'><li>Restaurantes</li></Link>
                    <Link to='/tiendas'><li>Tiendas</li></Link>
                    <Link to='/servicios'><li>Servicios</li></Link>
                </ul>
              </div>
              <div className='second-section'>
                <ul>
                    <Link to='/quienes-somos'><li>Quiénes Somos</li></Link>
                    <Link to='/empleos'><li>Empleos</li></Link>
                    <Link to='/lineas-de-emergencia'><li>Lineas de emergencia</li></Link>
                </ul>
              </div>
              <div className='third-section'>
                <ul>
                    <Link to='/contactenos'><li>Contactenos</li></Link>
                </ul>
              </div>
            <div className='arrow' onClick={handleClick}>
              <span>→</span>
            </div>
            </div>
        </div>
     
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/quienes-somos" element={<Quienes_somos/>}></Route>
      <Route path="/contactenos" element={<Contactanos />}></Route>
      <Route path='/restaurantes' element={<Restaurantes/>}></Route>
      <Route path='/producto' element={<Producto/>}></Route>    
    </Routes>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
