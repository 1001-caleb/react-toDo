export const VisibilityControl = ({ setShowCompleted, cleanTask, isChecked }) => {


    const handleDelete = () => {

        if (window.confirm('are you sure want to delete it?')) {
            cleanTask();
            setShowCompleted(false)
        }

    }

    return (
        <div className='flex gap-4 justify-between p-4 '>
            <input
                className='checkbox'
                checked={isChecked}
                type="checkbox"
                onChange={(e) => setShowCompleted(e.target.checked)}
            />{''}
            <label>Show task done</label>

            <button onClick={handleDelete} className='text-xl font-extrabold'>
                X
            </button>


        </div>
    )
}