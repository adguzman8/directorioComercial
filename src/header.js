import React from 'react';
import './header.css'

function Header (){

    return(
        <div className='header-container'>
            <div className='div-logo'>
                <img src="./logo.svg" alt="logo"></img>
            </div>
            <div>
                <input className='busqueda' type='text' id='busqueda' name='busqueda-principal' placeholder=' ¿Qué hay para hoy?'></input>
            </div>
            <div className='menu-list'>
                <ul>
                    <a  href='index.html'><li>Restaurantes</li></a>
                    <a  href='index.html'><li>Mercados</li></a>
                    <a  href='index.html'><li>Licores</li></a>
                    <a  href='index.html'><li>Contactnos</li></a>
                </ul>
            </div>
            <div className='nav'>
                <span className='nav-top'></span>
                <span className='nav-midle'></span>
                <span className='nav-buttom'></span>
            </div>
        </div>
    );

}

export default Header;