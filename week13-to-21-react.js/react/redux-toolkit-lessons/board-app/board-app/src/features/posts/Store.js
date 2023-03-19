import { configureStore } from "@reduxjs/toolkit";
import postreducer from "./postSlice";
import userreducer from "./users/userslice";



export const Store =configureStore({
    reducer:{
       post :postreducer,
       user:userreducer,
    }
})


