import React from 'react'
import {GetBannerClientById} from './Selectors/GetBannerClientById'
import './BannerCliente.css'


 function BannerCliente(props) {

    const banner= GetBannerClientById(props.cliente)

    const BannerClienteImages = require.context('./img/bannerCliente', true);

    return (
    <React.Fragment>
        <div className='banner-cliente-container'>
            <img src={BannerClienteImages(`./banner_${banner[0].id}_${banner[0].imgBanner}.png`)} alt={`./banner_${banner[0].id}_${banner[0].imgBanner}.png`}></img>
        </div>
    </React.Fragment>
  )
}export {BannerCliente}
