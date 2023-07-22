import React from 'react'
import {Slide} from './Slide';
import './Home.css'

import hamburguesa from './img/haburguesa.jpg'
import helado from './img/Helado.png'

import pauta1 from './img/pauta1.jpg';
import pauta2 from './img/pauta2.jpg';
import { Tiendas } from './Tiendas';

function Home() {
    const promos=[
        {id:1, img: hamburguesa, alt:'hamburguesa',nombre: 'Deli-Hamburguesa', descripcion:'Hamburguesa doble carne con queso chedar', sello:'-10%', link:'/'},
        {id:2, img: helado, alt:'Helado',nombre: 'Deli-Helado', descripcion:'Helado 2X1', sello:'2X1', link:'/'},
        {id:1, img: hamburguesa, alt:'hamburguesa',nombre: 'Deli-Hamburguesa', descripcion:'Hamburguesa doble carne con queso chedar', sello:'-10%', link:'/'},
        {id:2, img: helado, alt:'Helado',nombre: 'Deli-Helado', descripcion:'Helado 2X1', sello:'2X1', link:'/'},
        {id:1, img: hamburguesa, alt:'hamburguesa',nombre: 'Deli-Hamburguesa', descripcion:'Hamburguesa doble carne con queso chedar', sello:'-10%', link:'/'},
        {id:2, img: helado, alt:'Helado',nombre: 'Deli-Helado', descripcion:'Helado 2X1', sello:'2X1', link:'/'},
        {id:1, img: hamburguesa, alt:'hamburguesa',nombre: 'Deli-Hamburguesa', descripcion:'Hamburguesa doble carne con queso chedar', sello:'-10%', link:'/'},
        {id:2, img: helado, alt:'Helado',nombre: 'Deli-Helado', descripcion:'Helado 2X1', sello:'2X1', link:'/'}];
  
        const promos1 = promos.slice(0, 6);
        const promos2 = promos.slice(3, 6);

    const pautas=[{id:1,img:pauta1,alt:'pauta'},{id:2,img:pauta2,alt:'pauta_2'}]
    return (
    <React.Fragment>
        <Slide></Slide>
        <Tiendas></Tiendas>
        <div className='promo-container-home'>
        {(promos1.map(item=>
        <a href={item.link}>
        <div className='promo-item' key={item.id}>
            <div className='promo-item-container'>
                <img src={item.img} alt={item.alt}></img>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
            </div>
            <div className='promo-item-span'>
                <span>{item.sello}</span>
            </div>
        </div>
        </a>
        ))}
        </div>
        <div className='pauta-productos'>
            {(pautas.map(item=>
                <a href='/' key={item.id} ><img src={item.img} alt={item.alt}></img></a>
                ))}
        </div>
        <div className='promo-container-home'>
        {(promos2.map(item=>
        <a href={item.link}>
        <div className='promo-item' key={item.id}>
            <div className='promo-item-container'>
                <img src={item.img} alt={item.alt}></img>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
            </div>
            <div className='promo-item-span'>
                <span>{item.sello}</span>
            </div>
        </div>
        </a>
        ))}
        </div>
    </React.Fragment>
  )
}
export {Home}
