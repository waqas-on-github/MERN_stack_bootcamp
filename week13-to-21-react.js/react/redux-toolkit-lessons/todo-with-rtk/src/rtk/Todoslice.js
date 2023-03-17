import { createSlice } from "@reduxjs/toolkit";


const initialState={
 items:[],
 value: {value:"" ,key :"ksadgksado"},
 isempty:false,
 isduplicate:false
}

export const todoslice =createSlice({
    name :'todo',
    initialState,
    
    reducers:{

       
    captuevalue:(state,action) =>{
            state.value =action.payload
        }
,
    addvalue : (state) => {
       
        const isDuplicate = state.items.some((item) => item.value === state.value.value);

        if (isDuplicate) {
          state.isduplicate = true;
        } else {
          state.items.push(state.value);
          state.isduplicate = false;
          state.value = {value:"", key:""}; 
        }         
        
    },

    removeitem: (state,action)=> {
        state.items =state.items.filter((item) => item.key!==action.payload)
        
        
    }
,
    inputempty:(state,action)=> {
            state.isempty=action.payload
    }
    ,
    isduplicate : (state ) =>{
        state.isduplicate=true
    } 
    ,
    editable : (state ,action )=> {
        state.items =state.items.filter((item) => item.key!==action.payload.key)
        state.value = action.payload;

    }
   

    
}

})


export const { captuevalue ,addvalue,removeitem ,inputempty,editable} =todoslice.actions;
export default todoslice.reducer;