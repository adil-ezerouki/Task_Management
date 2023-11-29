import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../reducers/TasksReducer';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {


  const [taskData, setTaskData] = useState({});
  const tasks = useSelector((state)=> state.tasks)
  let tasksLength = tasks.length;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTaskData(values => ({ ...values, [name]: value }))
    taskData.id = tasksLength+=1 ;
    taskData.completed = false;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskData);
    dispatch(addTask(taskData))
    navigate('/')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor='taskTitle'>task title</label>
        <input type='text' name='title' id='taskTitle' value={taskData.title || ""}
          onChange={handleChange} className='border' />

        <label htmlFor='taskDescription'>task title</label>
        <input type='text' name='description' id='taskDescription' className='border' value={taskData.description || ""}
          onChange={handleChange} />

        <label htmlFor='taskImportantce'>task title</label>
        <select type='text' name='importantce' id='taskImportantce' className='border' value={taskData.importantce || "high"}
          onChange={handleChange}>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>

        <button>Add</button>
      </form>
    </div>
  )
}
