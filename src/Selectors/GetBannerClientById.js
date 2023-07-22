import {ClientesBannerData} from '../data/bannerClienteData'

export const GetBannerClientById = (id) =>{
    return ClientesBannerData.filter(banneredata => banneredata.id === id );
}