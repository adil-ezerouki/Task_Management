import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Add_task from './components/AddTask'
import EditTask from './components/EditTask'
import NotFoundErr from './components/NotFoundErr'
import AllTasks from './components/AllTasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<AllTasks />} />
          <Route path='add_task' element={<Add_task />} />
          <Route path='edit_task' element={< EditTask />} />
          <Route path='*' element={<NotFoundErr />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
