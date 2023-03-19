import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState=[
    {id:nanoid() ,title :"learning rtk " ,content :'learning rtk in best way '},
    {id:nanoid(),title :"learning rtk with dave" ,content :'learning rtk in best possible way '}

]

let postSlice =createSlice({
    name :'posts',
    initialState,
    reducers:{
        
     setposts :{
      reducer(state, action) {
        state.push(action.payload)
    },
    prepare(title, content) {
        return {
            payload: {
                id: nanoid(),
                title,
                content}
              }
                            }
                }
     
     
             }
})


export const selectposts  = (state) => state.post;

export default postSlice.reducer

export  const {setposts} = postSlice.actions;





