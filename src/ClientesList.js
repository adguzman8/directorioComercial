import React from 'react'
import './ClientesList.css'
import { GetClientbyCategory } from './Selectors/GetClientbyCategory'
import { Link } from 'react-router-dom';

function ClientesList({ category }) {

  const clienteImages = require.context('./img/Logos', true);

  const clientes = GetClientbyCategory(category);

  return (
    <React.Fragment>
      <div className='cliente-list-container'>
        <div>
          {clientes.map(item => (
            <Link to={item.id}>
              <div key={item.id} className='item-container-cliente'>
                <img src={clienteImages(`./logo_${item.id}.png`)} alt={`logo_${item.id}`}></img>
                <h2>{item.nombre}</h2>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
} export { ClientesList } 
