import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Reserva = ( {lugar, toggleComplete, deleteReserva, editReserva} ) => {
    return (
        <div className='Reserva'>
            <p onClick={() => toggleComplete(lugar.id)} 
            className={lugar.completed ? 'completed': ''}
            >{lugar.lugar}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editReserva(lugar.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteReserva(lugar.id)} />
            </div>
        </div>
    )
}