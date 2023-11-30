import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name : 'tasks',
    initialState : JSON.parse(localStorage.getItem('tasks')) || [],
    reducers : {
        addTask: (state,action) => {
            state.push(action.payload)
            localStorage.setItem('tasks',JSON.stringify(state))
            console.log(localStorage.getItem('tasks'))
        },
        editTask: (state,action) => {
            
            const {id,title,description,completed,importantce} = action.payload
            let targetedTask = state.find((task)=> task.id == id);

            if(targetedTask) {
                targetedTask.title = title,
                targetedTask.description = description,
                targetedTask.completed = completed,
                targetedTask.importantce = importantce
            }

            localStorage.setItem('tasks',JSON.stringify(state))



        },

        deleteTask : (state,action) => {
            const {id} = action.payload
            let targetedTask = state.find((task)=> task.id == id);
            if(targetedTask) {
                 state = state.filter((task)=> task.id !== id)
            }

            // console.log(state)
            localStorage.setItem('tasks',JSON.stringify(state))
            location.reload();


        },
        
        editCompleted : (state,action) => {
            const {id} = action.payload
            console.log(id)
            let targetedTask = state.find((task)=> task.id === id);
            if(targetedTask) {
                targetedTask.completed = !targetedTask.completed;
            }

            localStorage.setItem('tasks',JSON.stringify(state))
            location.reload();

            

        }
    }
})

export const {addTask,editTask,deleteTask,editCompleted} = tasksSlice.actions
export default tasksSlice.reducer