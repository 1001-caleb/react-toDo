import { useState } from 'react'
import './App.css'
import { TaskCreator } from './components/TaskCreator'

function App() {

  const [taskItems, setTaskItems] = useState([
    { name: 'primer tarea', done: false },
    { name: 'segunda tarea', done: false },
    { name: 'tercera tarea', done: false }
  ]);

  {/* añadimos el nombre de nyuestra tarea ingresada al array de objetos */}
  function createNewTask(taskName) {

    {/* validamos que la tarea no esté repetida */}
    if(!taskItems.find(task => task.name === taskName)){
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
    
  }

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
