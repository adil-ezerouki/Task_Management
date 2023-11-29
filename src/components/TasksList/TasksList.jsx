import React, { useEffect, useState } from 'react'
import "./TasksList.css"
import ToggleButton from 'react-toggle-button'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editCompleted } from '../../reducers/TasksReducer';
import Done from '../../assets/Done.png'
import NotDone from '../../assets/NotYet.png'

export default function AllTasks() {

  const [completed, setCompleted] = useState(false);
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask({ id: id }))
  }

  const handleCompleted = (id) => {
    dispatch(editCompleted({ id: id }))
  }

  const filterCompletedTasks = () => {
    tasks = tasks.filter((task) => task.completed == true)
  }


  return (
    <div className=' flex p-0 pt-5 flex-col gap-10'>
      <div className='filter flex justify-between px-20'>
        <button onClick={filterCompletedTasks} type="button" className="flex items-center focus:outline-none rounded-lg
                             text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border
                              border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
          <span className="inline-flex items-center justify-center w-16 text-gray-600 text-xs rounded bg-white transition mr-2">
            <img src={Done} className='' alt="" />
          </span>
          <span className="text-sm">Completed</span>
        </button>

        <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 
                            hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent 
                            hover:border-yellow-300 focus:border-yellow-300 transition">
          <span className="text-sm">Uncompleted</span>
          <span className="inline-flex items-center justify-center w-16 text-gray-600 text-xs rounded bg-white transition ml-2">
            <img src={NotDone} className='' alt="" />
          </span>
        </button>

      </div>
      <div className='tasks flex p-0 pt-5  flex-wrap gap-10'>

        {
          tasks.map((task, index) => (


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
                <p className={`${task.completed ? 'line-through' : ''}`}>{task.description}</p>
                <div className='actions flex gap-10'>
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

          ))
        }
        <div className='add_task bg-gray-300 flex justify-center align-center'>
          <Link className='self-center' to='add_task'><i class="fa-solid fa-circle-plus text-[80px] text-gray-400 cursor-pointer"></i></Link>
        </div>
      </div>
    </div>
  )
}
