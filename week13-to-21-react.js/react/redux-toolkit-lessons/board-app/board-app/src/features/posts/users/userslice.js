import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState =[
    {id:nanoid() ,name :"waqas"},
    {id:nanoid(),name :"usman"},
    {id:nanoid() ,name :"imran"}

]

let userslice =createSlice ({
      name :'users',
      initialState,
      reducers:{

      }

})


export default userslice.reducer;
export const selectAllusers = ((state) => state.user)
