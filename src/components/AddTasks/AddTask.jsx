import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../reducers/TasksReducer';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {


  const [taskData, setTaskData] = useState({});
  const tasks = useSelector((state)=> state.tasks)
  let tasksLength = tasks ? tasks.length : 0;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTaskData(values => ({ ...values, [name]: value }))
    taskData.id = tasksLength+=1 ;
    taskData.completed = false;

    console.log(taskData.importantce)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskData);
    dispatch(addTask(taskData))
    navigate('/')
  }
  return (
    <div className= {`flex p-12 justify-center items-center ${taskData.importantce == 'high' ? "bg-red-100" : taskData.importantce == 'low' ? "bg-yellow-100" : 'bg-green-100'}`}>
      <form onSubmit={handleSubmit} className={`flex flex-col w-[400px] h-[490px] p-6 ${taskData.importantce == 'high' ? "bg-red-300" : taskData.importantce == 'low' ? "bg-yellow-300" : 'bg-green-300'}  rounded-lg gap-4 text-[20px]`}>

        <label htmlFor='taskTitle'>task title :</label>
        <input required placeholder='title' type='text' name='title' id='taskTitle' value={taskData.title || ""}
          onChange={handleChange} className='border py-2 px-5 rounded-lg ' />

        <label htmlFor='taskDescription'>task description :</label>
        <textarea required placeholder='description' type='text' name='description' id='taskDescription' className='border h-[200px] py-2 px-5 rounded-lg' value={taskData.description || ""}
          onChange={handleChange} />

        <label htmlFor='taskImportantce'>task status :</label>
        <select required type='text' name='importantce' id='taskImportantce'  className='border py-2 px-5 rounded-lg' value={taskData.importantce || ""}
          onChange={handleChange}>
            <option defaultValue className='text-gray-400'>select status</option>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>

        <button className='bg-blue-400 self-center w-[100px] rounded-lg py-2 px-5'>Add</button>
      </form>
    </div>
  )
}
