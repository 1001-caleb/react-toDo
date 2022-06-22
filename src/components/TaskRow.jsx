export const TaskRow = ({task, toggleTask}) => {
    return (
        <tr>
            <td>{task.name}</td>
            <input
                type='checkbox'
                checked={task.done}
                onChange={() => toggleTask(task)}
            />
        </tr>
    )
}