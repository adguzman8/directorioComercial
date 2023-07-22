import {InfoClientesData} from '../data/infoclienteData'

export const GetInfoClientbyId = (id) =>{
    return InfoClientesData.filter(clineteinfodata => clineteinfodata.id === id );
}