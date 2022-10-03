import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskForm } from '../components/TaskForm/TaskForm'
import { Tasks } from '../components/Tasks/Tasks'
import { Home } from '../pages/home/Home'
import { ViewTask } from '../pages/viewTask/ViewTask'

export const RoutesTasks = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='createdTask' element={<TaskForm/>} />
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path='/viewtask/:id' element={<ViewTask/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
