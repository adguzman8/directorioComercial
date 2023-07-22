import React from 'react'
import { useParams } from 'react-router'
import { GetClienteById } from './Selectors/GetClienteById';
import { GetProductById } from './Selectors/GetProductById';

 function Cliente() {
    const {tiendaId}=useParams(); 
    console.log(tiendaId);
    const cliente =GetClienteById(tiendaId)
    const productos=GetProductById(tiendaId)
  return (
    <React.Fragment>
        <div><p>{cliente.id}</p></div>
        {productos.map(item=>(
          <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
          </div>
        ))}
    </React.Fragment>
  )
}export {Cliente}
