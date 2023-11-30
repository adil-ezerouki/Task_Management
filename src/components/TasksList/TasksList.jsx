import React, { useEffect, useState } from 'react'
import "./TasksList.css"
import ToggleButton from 'react-toggle-button'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editCompleted } from '../../reducers/TasksReducer';
import Done from '../../assets/Done.png'
import NotDone from '../../assets/NotYet.png'

export default function AllTasks() {

  const [allTasks, setAllTasks] = useState(useSelector((state) => state.tasks))
  const tasks = useSelector((state) => state.tasks);
  const[activeFilter, setActiveFilter] = useState('allTasks')

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask({ id: id }))
  }

  const handleCompleted = (id) => {
    dispatch(editCompleted({ id: id }))
  }

  const filterCompletedTasks = () => {
    setAllTasks(tasks.filter((task) => task.completed == true))
    setActiveFilter('completedTasks')
  }

  const filterUnCompletedTasks = () => {
    setAllTasks(tasks.filter((task) => task.completed == false))
    setActiveFilter('uncompletedTasks')
  }

  const filterAllTasks = () => {
    setAllTasks(tasks)
    setActiveFilter('allTasks')
  }


  return (
    <div className=' flex p-0 pt-8 flex-col gap-5 bg-blue-100 h-full'>
      <div className='filter flex justify-between px-20'>
        <button onClick={filterCompletedTasks} type="button" className={`flex items-center focus:outline-none rounded-lg
                             text-gray-600 hover:text-yellow-600  font-semibold p-2 border
                              border-transparent hover:border-yellow-300 ${activeFilter == 'completedTasks' ? 'border-yellow-300 bg-yellow-100 transition text-yellow-600' : ''} `}>
          <span className="inline-flex items-center justify-center w-16 text-gray-600 text-xs rounded transition mr-2">
            <img src={Done} className='' alt="" />
          </span>
          <span className="text-lg">Completed</span>
        </button>

        <button onClick={filterAllTasks} type="button" className={`flex items-center focus:outline-none rounded-lg
                             text-gray-600 hover:text-yellow-600 font-semibold px-5  border
                              border-transparent hover:border-yellow-300 ${activeFilter == 'allTasks' ? 'border-yellow-300 bg-yellow-100 transition text-yellow-600' : ''}`}>
          <span className="text-lg">All Tasks</span>
        </button>

        <button onClick={filterUnCompletedTasks} type="button" className={`flex items-center focus:outline-none rounded-lg text-gray-600 
                            hover:text-yellow-600  font-semibold p-2 border border-transparent 
                            hover:border-yellow-300 ${activeFilter == 'uncompletedTasks' ? 'border-yellow-300 bg-yellow-100 transition text-yellow-600' : ''}`}>
          <span className="text-lg">Uncompleted</span>
          <span className="inline-flex items-center justify-center w-16 text-gray-600 text-xs rounded transition ml-2">
            <img src={NotDone} className='' alt="" />
          </span>
        </button>

      </div>
      <div className='guiding-info flex justify-between text-lg font-medium px-20'>
        <div className='flex gap-3'>
          <div className='bg-red-400 w-[30px] rounded-lg h-[30px]'></div>
          <span className='self-center'>:</span>
          <span className='self-center'>High Tasks</span>
        </div>
        <div className='flex gap-3'>
          <div className='bg-green-400 w-[30px] rounded-lg h-[30px]'></div>
          <span className='self-center'>:</span>
          <span className='self-center'>medium Tasks</span>
        </div>
        <div className='flex gap-3'>
          <div className='bg-yellow-400 w-[30px] rounded-lg h-[30px]'></div>
          <span className='self-center'>:</span>
          <span className='self-center'>Low Tasks</span>
        </div>
      </div>
      <div className='tasks flex ps-12 pt-5  flex-wrap gap-10 pb-8' >

        {allTasks ? (
          allTasks.map((task, index) => (


            <div className={`task ${task.importantce == 'high' ? "bg-red-300" : task.importantce == 'medium' ? "bg-green-300" : task.importantce == 'low' ? "bg-yellow-300" : ''} rounded-full`} key={index}>
              <div className={` ${task.completed ? "Done_bg" : 'NotDone_bg'} w-full h-full flex flex-col p-5 `}>
                <button className="self-end w-100">
                  <ToggleButton className='hh'
                    inactiveLabel='Nt'
                    activeLabel='Dn'

                    value={task.completed}
                    onToggle={() => handleCompleted(task.id)} />
                </button>
              </div>
              <div className='flex flex-col justify-center items-center gap-4 px-5 py-7'>
                <span className={`self-start text-white py-1 px-3 ${task.importantce == 'high' ? "bg-red-500" : task.importantce == 'medium' ? "bg-green-500" : task.importantce == 'low' ? "bg-yellow-500" : ''} rounded-full`}>{task.importantce}</span>
                <h2 className={`self-start text-[25px] ${task.completed ? 'line-through' : ''} `}>{task.title}</h2>
                <p className={`self-start ${task.completed ? 'line-through' : ''}`}>{task.description}</p>
                <div className=' actions  flex gap-10'>
                  <Link to={`/edit_task/${task.id}`} className='btn bg-yellow-600 p-2 w-[90px]  rounded-lg flex gap-2 '>
                    <i className="fa-solid fa-pen-to-square self-center"></i>
                    <span>Edit</span>
                  </Link>
                  <button onClick={() => handleDelete(task.id)} className='btn bg-red-600 p-2 rounded-lg flex gap-2'>
                    <i className="fa-solid fa-trash self-center"></i>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>

          )))
          :
          ''
        }
        <div className='add_task bg-gray-300 flex justify-center align-center'>
          <Link className='self-center' to='add_task'><i class="fa-solid fa-circle-plus text-[80px] text-gray-400 cursor-pointer"></i></Link>
        </div>
      </div>
    </div>
  )
}
