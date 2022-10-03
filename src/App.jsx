import { useState } from 'react'
import './App.css'
import { TaskForm } from './components/TaskForm/TaskForm'
import { Tasks } from './components/Tasks/Tasks'
import { RoutesTasks } from './routes/routes'

function App() {

  return (
    <div>
      <RoutesTasks />
    </div>
  )
}

export default App
