import React from 'react';
import './header.css'

function Header (){

    return(
        <div className='header-container'>
            <div className='div-logo'>
                <img src="./logo.svg" alt="logo"></img>
            </div>
            <div>
                <input className='busqueda' type='text' id='busqueda' name='busqueda-principal' placeholder='cliente'></input>
            </div>
            <div className='nav'>
                <span className='nav-top'></span>
                <span className='nav-midle'></span>
                <span className='nav-buttom'></span>
            </div>
            <div>
                <ul>
                    <li><a>Restaurantes</a></li>
                    <li><a>Mercados</a></li>
                    <li><a>Licores</a></li>
                    <li><a>Contactanos</a></li>
                </ul>
            </div>
        </div>
    );

}

export default Header;