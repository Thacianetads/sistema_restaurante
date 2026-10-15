import React, { useState } from 'react'

export const ReservaForm = ({addReserva}) => {
    const [value, setValue] = useState({
        nome: '',
        data: '',
        hora: '',
        qtde: ''
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

        addReserva(value);

        setValue({
            nome: '',
            data: '',
            hora: '',
            qtde: ''
        })
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
            />
            <br />
            <input 
                type="date" 
                className='reserva-input' 
                name="data" 
                value={value.data}
                placeholder='Data' 
                onChange={handleChange} 
            />
            <br />
            <input 
                type="time" 
                className='reserva-input' 
                name="hora" 
                value={value.hora}
                placeholder='Horario' 
                onChange={handleChange} 
            />
            <br />
            <input 
                type="text" 
                className='reserva-input' 
                name="qtde" 
                value={value.qtde} // Corrigido de qte para qtde
                placeholder='Quantidade de pessoas' 
                onChange={handleChange} 
            />
            <br/>

            <button type='submit' className='reserva-btn'>Adicionar reserva</button>
        </form>
    )
}