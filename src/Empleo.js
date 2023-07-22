import React from 'react'
import Trabajadora from './img/trabajadora.png'
import './Empleo.css';
import { GetempleosDatos } from './Selectors/GetEmpleosData'

function Empleo() {

  const Empleo = GetempleosDatos('activo')
  console.log(Empleo)
  return (
    <React.Fragment>
      <div>Empleo</div>
      <div className='oferta-info'>
        <h2>La oferta que estas buscando</h2>
        <div className='oferta-text-info'>
          <div><p> Este espacio esta diseñado para que encuentres
            diversas ofertas a las cuales puedas aplicar.</p></div>
          <div><img src={Trabajadora} alt='Trabajadora'></img></div>
        </div>
      </div>
      <div className='oferta-empleo-info'>
        <h1>Ofertados</h1>
        {Empleo.map(item => (
          <div className='oferta-item-container'>
            <div className='oferta-item'>
              <h3>{item.empresa}</h3>
              <p className='oferta-item-region'>{item.region}</p>
            </div>
            <div className='oferta-item-data'>
              <span>${item.salario}</span>
              <p>{item.descripcion}</p>
              <h3>Requisitos</h3>
              <p className='requisitos'>{item.requisitos}</p>
            </div>
            <div className='oferta-datos-contacto'> 
            <p>{item.contacto}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
} export { Empleo }
