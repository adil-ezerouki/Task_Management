import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TasksList from './components/TasksList/TasksList'
import HighTasks from './components/HighTasks/HighTasks'
import MediumTasks from './components/MediumTasks/MediumTasks'
import LowTasks from './components/LowTasks/LowTasks'
import NotFoundErr from './components/NotFoundErr'
import AddTask from './components/AddTasks/AddTask'
import EditTask from './components/EditTasks/EditTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<TasksList />} />
          <Route path='high_tasks' element={<HighTasks />} />
          <Route path='medium_tasks' element={<MediumTasks />} />
          <Route path='low_tasks' element={<LowTasks />} />
          <Route path='add_task' element={<AddTask />} />
          <Route path='edit_task' element={<EditTask />} />
          <Route path='*' element={<NotFoundErr />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
