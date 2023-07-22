import {ClientesData} from '../data/clienteData'

export const GetClienteById = (id) =>{
    return ClientesData.find(Clientebyid => Clientebyid.id === id );
}