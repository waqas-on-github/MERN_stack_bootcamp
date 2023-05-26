import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   task : []
  }



 export const todoslice = createSlice ({
    name : "todoslice" , 
    initialState, 
    reducers : {
        addtodo : (state , action ) => {
            state.task.push(action.payload)
        }
    }

  })


  export const  {addtodo} = todoslice.actions
  export default todoslice.reducer


 