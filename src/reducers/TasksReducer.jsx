import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name : 'tasks',
    initialState :
    [
        {
            title: 'Practice Js',
            description : "this is a good mission that you would llike to have in your life",
            importantce : 'high',
            completed : true
        },
        {
            title: 'Practice Html',
            description : "this is a good mission that you would llike to have in your life",
            importantce : 'medium',
            completed : false
        },
        {
            title: 'Practice Css',
            description : "this is a good mission that you would llike to have in your life",
            importantce : 'low',
            completed : true
        },

    ],
    reducers : {
        addTask: (state,action) => {
            state.push(action.payload)
        }
    }
})

export const {addTask} = tasksSlice.actions
export default tasksSlice.reducer