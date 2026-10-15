import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
        const [value, setValue] = useState("")

        const handleSubmit = e => {
            e.preventDefault();

            addTodo(value);

            setValue("")
        }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value}
            placeholder='Nome cliente' onChange=
            {(e) => setValue(e.target.value)} />
            <br></br>
            <input type="date" className='todo-input' value={value}
            placeholder='Data' onChange=
            {(e) => setValue(e.target.value)} />
            <br></br>
            <input type="time" className='todo-input' value={value}
            placeholder='Horario' onChange=
            {(e) => setValue(e.target.value)} />
            <br></br>
            <input type="text" className='todo-input' value={value}
            placeholder='Quantidade de pessoas' onChange=
            {(e) => setValue(e.target.value)} />
            <br></br>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}