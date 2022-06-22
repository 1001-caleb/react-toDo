import { TaskRow } from "./TaskRow"

export const TaskTable = ({ tasks, toggleTask }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        task
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* recorremos el array de objetos de tareas y por cada tarea mostramos su nombre en una tabla. */}
                {
                    tasks.map(task => (
                        <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
                    ))
                }
            </tbody>
        </table>
    )

}