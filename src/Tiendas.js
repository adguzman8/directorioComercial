import React from 'react'
import tienda from './img/paraya_tienda.jpg';
import restaurante from './img/paraya_restaurante.jpg';
import servicios from './img/paraya_servicios.jpg';
import express from './img/paraya_express.jpg';
import './Tiendas.css'
import { Link } from 'react-router-dom';
function Tiendas() {
  return (
    <React.Fragment>
        <div className='container-links-servicios'>
            <Link to='/tienda/restaurante'><img src={restaurante} alt='tienda'></img></Link>
            <Link to='/restaurante'><img src={tienda} alt='tienda'></img></Link>
            <Link to='/servicios'><img src={servicios} alt='tienda'></img></Link>
            <Link to='/servicios'><img src={express} alt='tienda'></img></Link>
        </div>
    </React.Fragment>
  )
}export {Tiendas} 
