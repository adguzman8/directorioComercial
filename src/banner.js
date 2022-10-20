import React from "react";
import banner1 from '../src/img/peroya_banner_Banner_atualcance.png';
import banner2 from '../src/img/peroya_banner_Banner_tuscompras.png';
import './banner.css';
 

function Banner(){

    return(
        <React.Fragment>
            
        <div className="banner">

            <div>  
                <img src={banner1}/>  
                <p className="legend">Legend 1</p>  
            </div>  
            <div>  
                <img src={banner2} />  
                <p className="legend">Legend 2</p>  
            </div>  
            
        </div>
        </React.Fragment>
    );
}
export {Banner};