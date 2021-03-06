import { TaskRow } from "./TaskRow"

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

    const taskTablesRows = (doneValue) => {

        return (
            // recorremos el array de objetos de tareas y por cada tarea mostramos su nombre en una tabla.
            // filtramos antes para mostrar las tareas realizadas y las que no en sus respectivas tablas
            tasks
                .filter(task => task.done === doneValue)
                .map(task => (
                    <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
                ))
        )
    }

    return (
        <table className='table table-fixed w-full md:w-1/2 md:m-auto md:text-xl border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th>
                        task
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTablesRows(showCompleted)
                }
            </tbody>
        </table>
    )

}