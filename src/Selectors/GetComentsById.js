import {Comentarios} from '../data/comentData'

export const GetCommentClientbyId = (id) =>{
    return Comentarios.filter(clinetecomentdata => clinetecomentdata.id === id );
}