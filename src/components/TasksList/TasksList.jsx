import React, { useState } from 'react'
import "./TasksList.css"
import ToggleButton from 'react-toggle-button'
import { Link } from 'react-router-dom';

export default function AllTasks() {
  const [completed, setCompleted] = useState(false);
  return (
    <div className='tasks flex p-0  flex-wrap gap-10'>
      <div className='task bg-red-300'>
        <div className={` ${completed ? "Done_bg" : 'NotDone_bg'} w-full h-full flex flex-col p-5 `}>
          <button className="self-end w-100">
            <ToggleButton className='hh'
              inactiveLabel='Nt'
              activeLabel='Dn'

              value={completed}
              onToggle={() => {
                setCompleted(!completed)
              }} />
          </button>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 px-5 py-7'>
          <span className='self-start text-white py-1 px-3 bg-red-500 rounded-full '>High</span>
          <h2 className='self-start text-[25px]'>Task Title</h2>
          <p className=''>this is a good task that'll i will hone my skills in javascript and as well as css </p>
          <div className='actions flex gap-10'>
            <Link to='/edit_task' className='btn bg-yellow-600 p-2 w-[90px]  rounded-lg flex gap-2 '>
              <i className="fa-solid fa-pen-to-square self-center"></i>
              <span>Edit</span>

            </Link>
            <button className='btn bg-red-600 p-2 rounded-lg flex gap-2'>
              <i className="fa-solid fa-trash self-center"></i>
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
      <div className='add_task bg-gray-300 flex justify-center align-center'>
          <Link className='self-center' to='add_task'><i class="fa-solid fa-circle-plus text-[80px] text-gray-400 cursor-pointer"></i></Link>
      </div>
    </div>
  )
}
