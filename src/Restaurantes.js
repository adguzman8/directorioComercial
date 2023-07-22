import React from 'react'
import { ClientesList } from './ClientesList'

function Restaurantes() {
  return (
    <React.Fragment>
        <div>
            <h1>Restaurantes</h1>
            <ClientesList category='restaurante'></ClientesList>
        </div>
    </React.Fragment>
  )
}export {Restaurantes} 
