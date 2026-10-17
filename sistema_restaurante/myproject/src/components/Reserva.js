import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Reserva = ({ lugar, toggleComplete, deleteReserva, editReserva }) => {
    return (
        <div className='Reserva'>
            <div 
                onClick={() => toggleComplete(lugar.id)} 
                className={lugar.completed ? 'completed' : ''}
                style={{ cursor: 'pointer' }}
            >
                <p><strong>Cliente:</strong> {lugar.lugar.nome}</p>
                <p><strong>Data:</strong> {lugar.lugar.data}</p>
                <p><strong>Horário:</strong> {lugar.lugar.hora}</p>
                <p><strong>Pessoas:</strong> {lugar.lugar.qtde}</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editReserva(lugar.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteReserva(lugar.id)} />
            </div>
        </div>
    )
}