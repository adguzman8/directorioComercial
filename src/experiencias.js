import React from "react";
import './experiencias.css';
import imagen from'./imagen_experiencias1.png';
import imagen2 from'./imagen_experiencias2.png';


const imagenes =[imagen,imagen2];
const alt=["imagen 1","imagen 1"];

var cont=0;


function experiencias(){
    return(
        <img src={imagenes[cont]}  alt={alt[cont]}></img>
        );
    
};

export default experiencias;