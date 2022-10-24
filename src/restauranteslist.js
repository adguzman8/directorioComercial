import React from 'react';
import './restauranteslist.css'

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
  return theData.map((x)=>(    
      <div className='restaurante-list-container'>
      <img src={x.imagen} alt={x.name}></img>
      <h3>{x.cliente}</h3>
      <p>{x.descripcion}</p>
      <span>{x.puntuacion}</span>
      </div>    
));
}
export {RestaurantesList};
