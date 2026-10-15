import React, { useState } from 'react'

export const EditReserva = ({editReserva, lugar}) => {
        const [value, setValue] = useState("")

        const handleSubmit = e => {
            e.preventDefault();

            editReserva(value, lugar.id);

            setValue("")
        }
    return (
        <form className='ReservaForm' onSubmit={handleSubmit}>
           <input type="text" className='reserva-input' value={value}
            placeholder='Nome cliente' onChange=
            {(e) => setValue(e.target.value)} />
            <br></br>
            <input type="date" className='reserva-input' value={value}
            placeholder='Data' onChange=
            {(e) => setValue(e.target.value)} />
            <br></br>
            <input type="time" className='reserva-input' value={value}
            placeholder='Horario' onChange=
            {(e) => setValue(e.target.value)} />
            <br></br>
            <input type="text" className='reserva-input' value={value}
            placeholder='Quantidade de pessoas' onChange=
            {(e) => setValue(e.target.value)} />
            <br></br>
            <button type='submit' className='reserva-btn'>Atualizar reserva</button>
        </form>
    )
}