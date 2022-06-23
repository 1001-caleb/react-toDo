export const TaskRow = ({ task, toggleTask }) => {
    return (
        <>
            <tr>
                <td className='flex justify-between'>
                    {task.name}

                    <input
                        className="checkbox"
                        type='checkbox'
                        checked={task.done}
                        onChange={() => toggleTask(task)}
                    />

                </td>
            </tr>
            <tr>
                
            </tr>
        </>

    )
}