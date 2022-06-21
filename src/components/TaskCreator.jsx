import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
    const [newTaskName, setNewTaskName] = useState('')

    {/* manipulamos el envio de datos, guardamos en local storage y limpiamos el input  */ }
    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName);
        localStorage.setItem('task', newTaskName);
        setNewTaskName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* capturando lo que typeamos en el input con useState  */ }
            <input
                type="text"
                placeholder='Enter a new task'
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button onClick={(handleSubmit)}>save task</button>
        </form>
    )
   


}