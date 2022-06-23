import { useState, useEffect } from 'react'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl';

function App() {

  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () =>{
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  {/* añadimos el nombre de nuestra tarea ingresada al array de objetos */ }
  const createNewTask = (taskName) => {
    {/* validamos que la tarea no esté repetida */ }
    if (!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }

  }

  const toggleTask = (task) =>
    // cambiamos el estado de la tarea a cheched y viceversa
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  {/* apenas cargue la aplicación se ejecuta este effect que obtiene los datos guardados en tasks del localStorage parseandolos */ }
  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  const cleanTask = () => {
    setTaskItems(taskItems.filter(task => !task.done))
  }

  {/* vemos si nuestro array de tareas cambió y lo agregamos al localStorage en formato JSON */ }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems]);

  return (
    <div className="App text-center h-screen" data-theme={theme}>
 
      <input type="checkbox" className="toggle toggle-primary" onChange={(e)=>toggleTheme(e.target.checked)} />
    
      {/* pasamos como props la función para crear una nueva tarea */}
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={taskItems} toggleTask={toggleTask} />
      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={(cheked) => setShowCompleted(cheked)}
        cleanTask={cleanTask}
      />
      {
        showCompleted == true && (
          <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted} />
        )
      }
    </div>
  )
}

export default App
