import {ClientesData} from '../data/clienteData'

export const GetClientbyCategory = (category) =>{
    return ClientesData.filter(clinetecatedata => clinetecatedata.category === category );
}