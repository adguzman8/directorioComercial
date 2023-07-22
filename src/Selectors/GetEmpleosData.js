import { empleosDatos } from "../data/empleosData";

export const GetempleosDatos = (category) =>{
    return empleosDatos.filter(EmpleosinfoData => EmpleosinfoData.estado === 'activo');
}