import React from 'react'
import { GetCommentClientbyId } from './Selectors/GetComentsById'
import './Comentarios.css'

function Comentarios(props) {
    const comment = GetCommentClientbyId(props.cliente)

    return (
        <React.Fragment>
            <div className='comentarios-container'>
                <div><h2>Comentarios</h2></div>
                <div className='comentarios'>
                    {comment.map(item => (
                        <div>
                            <h3>{item.usuario}</h3>
                            <p>{item.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
} export { Comentarios } 
