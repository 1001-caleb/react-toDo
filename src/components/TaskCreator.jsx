import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
    const [newTaskName, setNewTaskName] = useState('')

    {/* manipulamos el envio de datos, guardamos en local storage y limpiamos el input  */ }
    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName);
        setNewTaskName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* capturando lo que typeamos en el input con useState  */}
            <input
                className='input input-bordered w-60 md:w-96 md:text-xl'
                type="text"
                placeholder='Enter a new task'
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button className='btn btn-square' onClick={(handleSubmit)}>save</button>
        </form>
    )



}