import React from 'react'
import './Cliente.css';
import { useParams } from 'react-router'
import { GetClienteById } from './Selectors/GetClienteById';
import { GetProductById } from './Selectors/GetProductById';
import { GetInfoClientbyId } from './Selectors/GetClienteInfoById';
import { Comentarios } from './Comentarios';
import {BannerCliente} from './BannerCliente';

function Cliente() {
  const { tiendaId } = useParams();
  const cliente = GetClienteById(tiendaId)
  const productos = GetProductById(tiendaId)
  const info = GetInfoClientbyId(tiendaId)

  const clienteImages = require.context('./img/Logos', true);
  const productImages = require.context('./img/productos', true);

  return (
    <React.Fragment>
      <div className='mini-banner'>
      </div>
      <div className='clientes-container'>
        <div className='logo-cliente' >
      <img src={clienteImages(`./logo_${cliente.id}.png`)} alt={`logo_${cliente.id}`}></img>
        </div>
        <div className='Cliente-name'><h1>{cliente.nombre}</h1></div>
        {/* Sección de productos del cliente*/}
        <BannerCliente cliente={cliente.id}></BannerCliente>
        <div className='cliente-product-container'>
          {productos.map(item => (
            <div className='cliente-product'>
              <img src={productImages(`./producto_${cliente.id}_${item.id_producto}.png`)} alt={`./producto_${cliente.id}_${item.id_producto}.png`}></img>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className='cliente-info-container'>
          <h2>Información</h2>
          <div className='info-container'>
            <div>
            <img src={clienteImages(`./logo_${cliente.id}.png`)} alt={`logo_${cliente.id}`}></img>
            </div>
            <div className='info-container-list'>
              <ul>
                {info.map(item => (
                    <li>{item.dato}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='clasificacion-cliente'>
            <h4>Clasificación</h4>
            <p>★ ★ ★ ✩ ✩</p>
          </div>
        </div>
        <div>
          <Comentarios cliente={cliente.id}></Comentarios>
        </div>
      </div>
    </React.Fragment>
  )
} export { Cliente }
