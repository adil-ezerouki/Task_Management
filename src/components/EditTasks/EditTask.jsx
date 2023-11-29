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

    <>
      <h1>edit</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor='taskTitle'>task title</label>
        <input type='text' name='title' id='taskTitle' value={taskEditData.title || ""}
          onChange={handleChange} className='border' />

        <label htmlFor='taskDescription'>task title</label>
        <input type='text' name='description' id='taskDescription' className='border' value={taskEditData.description || ""}
          onChange={handleChange} />

        <label htmlFor='taskImportantce'>task title</label>
        <select type='text' name='importantce' id='taskImportantce' className='border' value={taskEditData.importantce || ""}
          onChange={handleChange}>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>

        <label htmlFor='taskStatus'>task status</label>
        <ToggleButton className='hh'
          inactiveLabel='Nt'
          activeLabel='Dn'

          value={completed}
          onToggle={() => {
            setCompleted(!(completed)),
            setTaskEditData((prevData)=> ({...prevData , completed : !completed}));
          }} />

        <button>Edit</button>
      </form>
    </>
  )
}
