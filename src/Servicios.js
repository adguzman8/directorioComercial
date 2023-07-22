import React from 'react'
import { ClientesList } from './ClientesList'

function Servicios() {
  return (
    <React.Fragment>
        <div>
            <h1>Servicios</h1>
            <ClientesList category='servicios'></ClientesList>
        </div>
    </React.Fragment>
  )
}export {Servicios} 
