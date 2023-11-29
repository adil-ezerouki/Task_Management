import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name : 'tasks',
    initialState :
    [
        {
            title: 'Practice Js',
            description : "this is a good mission that you would llike to have in your life",
            importantce : 'high',
            completed : true,
            id : 1
        },
        {
            title: 'Practice Html',
            description : "this is a good mission that you would llike to have in your life",
            importantce : 'medium',
            completed : false,
            id : 2
        },
        {
            title: 'Practice Css',
            description : "this is a good mission that you would llike to have in your life",
            importantce : 'low',
            completed : true,
            id : 3
        },

    ],
    reducers : {
        addTask: (state,action) => {
            state.push(action.payload)
        },
        editTask: (state,action) => {
            // state.push(action.payload)
            // console.log(action)
            const {id,title,description,completed,importantce} = action.payload
            let targetedTask = state.find((task)=> task.id == id);

            if(targetedTask) {
                targetedTask.title = title,
                targetedTask.description = description,
                targetedTask.completed = completed,
                targetedTask.importantce = importantce
            }

        },
        deleteTask : (state,action) => {
            const {id} = action.payload
            let targetedTask = state.find((task)=> task.id == id);
            if(targetedTask) {
                return state.filter((task)=> task.id !== id)
            }

        },
        
        editCompleted : (state,action) => {
            const {id} = action.payload
            console.log(id)
            let targetedTask = state.find((task)=> task.id === id);
            if(targetedTask) {
                targetedTask.completed = !targetedTask.completed;
            }

            

        }
    }
})

export const {addTask,editTask,deleteTask,editCompleted} = tasksSlice.actions
export default tasksSlice.reducer