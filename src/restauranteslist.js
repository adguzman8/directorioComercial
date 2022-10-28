import React, { useState } from 'react';
import './restauranteslist.css';


function RestaurantesList() {
    const theData = [
        {
            id: '001503',
            imagen:'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cliente: 'Restaurante',
            descripcion: 'restaurante de hamburguesas',
            puntuacion: '★★★★★'
        },
    
        {
            id: '001503',
            imagen:'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cliente: 'Restaurante',
            descripcion: 'restaurante de hamburguesas',
            puntuacion: '★★★'
        },
        {
            id: '001503',
            imagen:'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cliente: 'Restaurante',
            descripcion: 'restaurante de hamburguesas',
            puntuacion: '★★★★★'
        },
        {
            id: '001503',
            imagen:'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cliente: 'Restaurante',
            descripcion: 'restaurante de hamburguesas',
            puntuacion: '★★★★'
        }
    ];

    const [cliente,setCliente]=useState ([]);

  return theData.map((x)=>(    
      <div key={x.id} className='restaurante-list-container' onClick={()=>setCliente()}>
      <img src={x.imagen} alt={x.name}></img>
      <h3>{x.cliente}</h3>
      <p>{x.descripcion}</p>
      <span>{x.puntuacion}</span>
      <p>{cliente}</p>
      </div>  

));
}
export {RestaurantesList};
