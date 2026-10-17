import React, { useState } from 'react'
import { ReservaForm } from './ReservaForm';
import { v4 as uuidv4 } from 'uuid';
import { Reserva } from './Reserva';
import { EditReserva } from './EditReserva';
uuidv4();

export const ReservaWrapper = () => {
        const [reservas, setReservas] = useState([])

        const addReserva = reserva =>{
            setReservas([...reservas, {id: uuidv4(), lugar: reserva, 
            completed: false, isEditing: false}])
            console.log(reservas)
        }

        const toggleComplete = id => {
            setReservas(reservas.map(reserva => reserva.id === id? {...
                reserva, completed: !reserva.completed} : reserva))
        }

        const deleteReserva = id => {
            setReservas(reservas.filter(reserva => reserva.id !== id))
        }

        const editReserva = id =>{
            setReservas(reservas.map(reserva => reserva.id === id ? {...
                reserva, isEditing: !reserva.isEditing} : reserva))
        }

        const editLugar = (lugar, id) => {
            setReservas(reservas.map(reserva => reserva.id === id ? {...
                reserva, lugar, isEditing: !reserva.isEditing} : reserva))
        }
    return (
        <div className='ReservaWrapper'>
            <h1>Restaurante caseiro</h1>
            <ReservaForm addReserva={addReserva} />
            {reservas.map((reserva, index) => (
                reserva.isEditing ? (
                    <EditReserva 
                        key={reserva.id || index}
                        editReserva={editLugar} 
                        lugar={{ ...reserva.lugar, id: reserva.id }}
                    />
                ) : (
                <Reserva lugar={reserva} key={index} 
                toggleComplete={toggleComplete} deleteReserva=
                {deleteReserva} editReserva={editReserva}/>
                )
            ))}

        </div>
    )
}