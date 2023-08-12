import React from 'react'
import { Link } from 'react-router-dom'
import './NavLink.css'
import { useState } from 'react'
import logo from'../src/img/parayaa_logo.png';

function NavLink() {

    const [open, setOpen] = useState(true);

    function openc() {
        console.log(!open);
        if (window.innerWidth < 410) {
            setOpen(!open);
            
        }
    }

    const links = [{ link: 'Inicio', ruta: '/' ,className:'link-color1'},
    { link: 'Restaurantes', ruta: '/restaurante' ,className:'link-color1'},
    { link: 'Servicios', ruta: '/servicios' ,className:'link-color1'},
    { link: 'Todos', ruta: '/servicios' ,className:'link-color3'}
    ];

    const linksint = [{ link: 'Empleo', ruta: '/empleo' ,className:'link-color1'},
    { link: 'Nosotros', ruta: '/restaurante' ,className:'link-color1'},
    { link: 'Contáctenos', ruta: '/servicios' ,className:'link-color2'}
    ];
    return (
        <React.Fragment>
            <div className='Nav-container'>
                <div><Link to='/'><img src={logo} alt='Logo para ya'></img></Link></div>
                <div className={open?'item-link-list': 'item-link-list-open'}>
                    <ul className='item-list'>
                        {links.map(item => (
                           <Link to={item.ruta} className={item.className}> <li onClick={openc}>{item.link}</li></Link>
                        ))}
                    </ul>
                    <ul className='item-list'>
                        {linksint.map(item => (
                           <Link to={item.ruta} className={item.className}> <li onClick={openc}>{item.link}</li></Link>
                        ))}
                    </ul>
                </div>
                <div className='hamburguer-nav' onClick={openc}>
                    <span className={open?'span1r': 'span1'}></span>
                    <span className={open?'span2r': 'span2'}></span>
                    <span className={open?'span3r': 'span3'}></span>
                </div>
            </div>
        </React.Fragment>
    )
} export { NavLink }
