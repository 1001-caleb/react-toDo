export const VisibilityControl = ({ setShowCompleted, cleanTask, isChecked }) => {
    const handleDelete = () => {
        if (window.confirm('are you sure want to delete it?')){
            cleanTask();
            setShowCompleted(false)
        }
    }

    return (
        <div>
            <input
                checked={isChecked}
                type="checkbox"
                onChange={(e) => setShowCompleted(e.target.checked)}
            />{''}
            <label>Show task done</label>

            <button onClick={handleDelete}>
                X
            </button>
        </div>
    )
}