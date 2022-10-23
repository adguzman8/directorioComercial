import React from 'react'
import {Formulario} from './formulario';
import contactenos from '../src/img/parayaa_logo.png';
import './contactenos.css'
 function Contactanos() {
  return (
    <div>
        <div className='contacto-container '>
            <h1>Contactenos</h1>
            <div className='datos-contacto-container'> 

            <div className='link-contacto'>
                <a href='#'><span>Telefono:</span> +57 311 123 0000</a>
                <a href='#'><span>Correo:</span> correo@parayaa.com</a>
                <a href='#'><span>Correo:</span> correo2@parayaa.com</a>
            </div>
            <div>
                <img src={contactenos} alt='contacto'></img>    
            </div>
            </div>
        </div>
            <Formulario/>
    </div>
  )
}
export {Contactanos}
