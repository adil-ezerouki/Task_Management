import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ToggleButton from 'react-toggle-button'
import { editTask } from '../../reducers/TasksReducer';

export default function EditTask() {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks)
  const targetedTask = tasks.filter((task) => task.id == id)
  const [taskEditData, setTaskEditData] = useState(targetedTask[0]);
  targetedTask[0] = taskEditData;


  const [completed, setCompleted] = useState(taskEditData.completed)

 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTaskEditData(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskEditData);
    dispatch(editTask(taskEditData))
    navigate('/')
  }
  

  return (

    <div className={`flex p-12 justify-center items-center ${taskEditData.importantce == 'high' ? "bg-red-100" : taskEditData.importantce == 'low' ? "bg-yellow-100" : 'bg-green-100'} ${taskEditData.completed ? 'done-Bg-edit' : 'notdone-Bg-edit' }`}>
      <form className={`flex flex-col w-[400px]  p-6 ${taskEditData.importantce == 'high' ? "bg-red-300" : taskEditData.importantce == 'medium' ? "bg-green-300" : taskEditData.importantce == 'low' ? 'bg-yellow-300' : ''} rounded-lg gap-4 text-[20px]`} onSubmit={handleSubmit}>

        <label htmlFor='taskTitle'>task title :</label>
        <input placeholder='title' type='text' name='title' id='taskTitle' value={taskEditData.title || ""}
          onChange={handleChange} className='border py-2 px-5 rounded-lg' />

        <label htmlFor='taskDescription'>task description :</label>
        <textarea placeholder='description' type='text' name='description' id='taskDescription' className='border h-[150px] py-2 px-5 rounded-lg' value={taskEditData.description || ""}
          onChange={handleChange} />

        <label htmlFor='taskImportantce'>task title :</label>
        <select type='text' name='importantce' id='taskImportantce' className='border py-2 px-5 rounded-lg' value={taskEditData.importantce || ""}
          onChange={handleChange}>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>

        <label htmlFor='taskStatus'>task status :</label>
        <ToggleButton className='hh'
          inactiveLabel='Nt'
          activeLabel='Dn'

          value={completed}
          onToggle={() => {
            setCompleted(!(completed)),
            setTaskEditData((prevData)=> ({...prevData , completed : !completed}));
          }} />

        <button className='bg-blue-400 self-center w-[100px] rounded-lg py-2 px-5'>Edit</button>
      </form>
    </div>
  )
}
