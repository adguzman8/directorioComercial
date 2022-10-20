import './App.css';
import React from 'react';
import Experiencias from './experiencias';
import {Slide} from  './slide';
import {Banner} from './banner';

function App() {
  return (
    <React.Fragment>
      <Banner/>
      <div class="experiencias">
        <div className='experiencias-texto'>
          <h2>Experiencias</h2>
          <p>Nos apasiona el crecimiento de cada uno de nuestros clientes, por esta razon buscamos los mejores estrategias para incrementaer
            su rencimiento. <span>¡cada cliente tiene un valor unico!</span>
          </p>
          <a href='index.html'>Conoce más</a>
        </div>
        <div className='experiencia-img'>
          <Experiencias/>
        </div>
      </div>
          <Slide/>
    </React.Fragment>
  );
}

export default App;
