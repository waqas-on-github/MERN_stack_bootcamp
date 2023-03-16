import { createSlice } from "@reduxjs/toolkit";


export const  counterSlice =createSlice ({
    name :'counter',
    initialState:{
        value:0
    },

    reducers:{
        increment:(state) => {
            state.value+=1
        },
        decrement :(state) => {
            state.value-=1
        }
,
        addten:(state) => {
            state.value +=10
        }
        
,
        reset : (state) => {
            state.value=0
        }
,
        customadd :(state,action) => {
            state.value += action.payload
        }

    }
})

export const {increment ,decrement ,addten ,reset ,customadd} =counterSlice.actions;
export default counterSlice.reducer;

































