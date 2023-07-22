import React from 'react'
import './Slide.css'

import slide1 from './img/pauta1.jpg';
 function Slide() {
  return (
    <React.Fragment>
        <div className='slide-container'>
            <img src={slide1} alt='Slide1'></img>
        </div>
    </React.Fragment>
  )
}
export {Slide}