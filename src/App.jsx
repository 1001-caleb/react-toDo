import { useState, useEffect } from 'react'
import './App.css'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'

function App() {

  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

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

  {/* vemos si nuestro array de tareas cambió y lo agregamos al localStorage en formato JSON */ }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems]);

  return (
    <div className="App">
      {/* pasamos como props la función para crear una nueva tarea */}
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={taskItems} toggleTask={toggleTask} />
      <div>
        <input type="checkbox" onChange={e => setShowCompleted(!showCompleted)} /> <label>Show task done</label>
      </div>
      {
        showCompleted == true && (
          <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted} />
        )
      }
    </div>
  )
}

export default App
