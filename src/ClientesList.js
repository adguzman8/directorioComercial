import React from 'react'
import {GetClientbyCategory} from './Selectors/GetClientbyCategory'
import { Link } from 'react-router-dom';
function ClientesList({category}) {

    const clientes= GetClientbyCategory(category);

  return (
    <React.Fragment>
        <h1>Cliente {category}</h1>
        <div>
          {clientes.map(item=>(
            <Link to={item.id}>
            <div key={item.id}>
              <h1>{item.nombre}</h1>
            </div>
            </Link>
          ))}
        </div>
    </React.Fragment>
  )
}export {ClientesList} 
