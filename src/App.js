import './App.css';
import React from 'react';
import Experiencias from './experiencias';

function App() {
  return (
    <React.Fragment>
      <div class="experiencias">
        <div>
          <h2>Experiencias</h2>
          <p>Nos apasiona el crecimiento de cada uno de nuestros clientes, por esta razon buscamos los mejores estrategias para incrementaer
            su rencimiento. <span>¡cada cliente tiene un valor unico!</span>
          </p>
          <a href="#">Conoce más</a>
        </div>
        <div>
          <Experiencias/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
