import React from 'react';
import './header.css';
import logo from'../src/img/parayaa_logo.png';

function Header (){

    return(
        <div className='header-container'>
            <div className='menu-list'>
                <ul>
                    <a  href='index.html'><li>Restaurantes</li></a>
                    <a  href='index.html'><li>Tiendas</li></a>
                    <a  href='index.html'><li>Servicios</li></a>
                </ul>
            </div>
            <div className='div-logo'>
                <img src={logo} alt="logo"></img>
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