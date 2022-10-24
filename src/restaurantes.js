import React, {useState}from 'react';
import {RestaurantesList} from './restauranteslist';
import './restaurantes.css';


function Restaurantes() {
    
    return (
        <React.Fragment>
    <div>
      <h1>Restaurnates</h1>
      <div className='list-container'>
      <RestaurantesList/>
      </div>
    </div>
    </React.Fragment>
  )
}
export  {Restaurantes};