import { useState, useEffect } from 'react'
import './App.css'
import { TaskCreator } from './components/TaskCreator'

function App() {

  const [taskItems, setTaskItems] = useState([]);

  {/* añadimos el nombre de nyuestra tarea ingresada al array de objetos */ }
  function createNewTask(taskName) {

    {/* validamos que la tarea no esté repetida */ }
    if (!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }

  }
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
            taskItems.map(task => (
              <tr key={task.name}>
                <td>{task.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default App
