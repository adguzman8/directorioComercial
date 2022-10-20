import React from "react";
import './slide.css';

function Slide(){

    return(
        <div className="slide-total">

        <div className="slide-component">
            <div>
                <h3>Tambien puedes encontrar:</h3>
            </div>
            <div className="direction">
                <span id='left'>2</span>
                <span id='right'>1</span>
            </div>
        </div>

        <div className="slide-container">
            <a><div><img></img><p>Supermercados</p></div></a>
            <a><div><img></img><p>Supermercados</p></div></a>
            <a><div><img></img><p>Supermercados</p></div></a>
            <a><div><img></img><p>Supermercados</p></div></a>
            <a><div><img></img><p>Supermercados</p></div></a>
            <a><div><img></img><p>Supermercados</p></div></a>
            <a><div><img></img><p>Supermercados</p></div></a>
            <a><div><img></img><p>Supermercados</p></div></a>
            <a><div><img></img><p>Supermercados</p></div></a>
        </div>
        
        </div>
    );
}
export {Slide};
