import React from 'react'
import './formulario.css';

 function Formulario() {
  return (
    <div className='formulario-de-contacto'>
    <h1>Formulario de contacto</h1>
      <p>Déjanos tus datos y nos contactaremos lo más pronto posible</p>
      <div className='formulario-container'>
      <form>
        <div className='label-nombre'>
        <label htmlFor='nombre'>Nombre: </label>
        <input type='text' id='nombre'></input>
        </div>
        <div className='label-correo'>            
        <label htmlFor='correo'>Correo: </label>
        <input type='email' id='correo'></input>
        </div>
        <div className='label-telefono'>
        <label htmlFor='telefono'>Telefono: </label>
        <input type='tel' id='telefono'></input>
        </div>
        <div className='label-Solicitud'>
        <label htmlFor='telefono'>Solicitud: </label>
        <select name="lenguajes" id="lang">
        <option value=""></option>
        <option value="Informacion de precios">Informacion de precios</option>
        <option value="Soporte">Soporte</option>
        <option value="Servicios de marketing">Servicios de marketing</option>
        </select>
        </div>
        <div className='label-mensaje'>
        <label htmlFor='mensaje'>Mensaje: </label>
        <input type='text' id='mensaje'></input>
        </div>
        <input  className='enviar' type="submit"/>
      </form>
      </div>
    </div>
  )
}
export {Formulario}
