import React, { useState } from 'react'

export const EditReserva = ({ editReserva, lugar }) => {
    const [value, setValue] = useState({
        nome: lugar?.nome || '',
        data: lugar?.data || '',
        hora: lugar?.hora || '',
        qtde: lugar?.qtde || ''
    })

    const handleChange = (e) => {
        const { name, value: inputValue } = e.target;
        setValue(prev => ({
            ...prev,
            [name]: inputValue
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();

        editReserva(value, lugar.id);
    }

    return (
        <form className='ReservaForm' onSubmit={handleSubmit}>
           <input 
                type="text" 
                className='reserva-input' 
                name="nome" 
                value={value.nome}
                placeholder='Nome cliente' 
                onChange={handleChange}
                required 
            />
            <br />
            <input 
                type="date" 
                className='reserva-input' 
                name="data" 
                value={value.data}
                placeholder='Data' 
                onChange={handleChange}
                required 
            />
            <br />
            <input 
                type="time" 
                className='reserva-input' 
                name="hora" 
                value={value.hora}
                placeholder='Horario' 
                onChange={handleChange}
                required 
            />
            <br />
            <input 
                type="text" 
                className='reserva-input' 
                name="qtde" 
                value={value.qtde}
                placeholder='Quantidade de pessoas' 
                onChange={handleChange}
                required 
            />
            <br/>
            <button type='submit' className='reserva-btn'>Atualizar reserva</button>
        </form>
    )
}