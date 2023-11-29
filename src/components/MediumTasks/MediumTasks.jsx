import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ToggleButton from 'react-toggle-button'
import { deleteTask, editCompleted } from '../../reducers/TasksReducer'


export default function MediumTasks() {

  const tasks = useSelector((state)=> state.tasks)
  const HighTasks = tasks.filter((task)=> task.importantce == 'medium')

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask({ id: id }))
  }

  const handleCompleted = (id)=> {
      dispatch(editCompleted({id : id}))
      // console.log(taskId)
  }

  return (
    <>
    <h1 className='p-5 text-center font-bold text-[25px]'>Low Tasks</h1>
    
    <div className='tasks flex p-0  flex-wrap gap-10'>
    
      {
        HighTasks.map((task, index) => (
          

          <div className={`task ${task.importantce == 'high' ? "bg-red-300" : task.importantce == 'medium' ? "bg-green-300" : task.importantce == 'low' ? "bg-yellow-300" : ''} rounded-full`} key={index}>
            <div className={` ${task.completed ? "Done_bg" : 'NotDone_bg'} w-full h-full flex flex-col p-5 `}>
              <button className="self-end w-100">
                <ToggleButton className='hh'
                  inactiveLabel='Nt'
                  activeLabel='Dn'

                  value={task.completed}
                  onToggle={()=> handleCompleted(task.id)} />
              </button>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 px-5 py-7'>
              <span className={`self-start text-white py-1 px-3 ${task.importantce == 'high' ? "bg-red-500" : task.importantce == 'medium' ? "bg-green-500" : task.importantce == 'low' ? "bg-yellow-500" : ''} rounded-full`}>{task.importantce}</span>
              <h2 className='self-start text-[25px]'>{task.title}</h2>
              <p className=''>{task.description}</p>
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
    </div>
    </>
  )
}
