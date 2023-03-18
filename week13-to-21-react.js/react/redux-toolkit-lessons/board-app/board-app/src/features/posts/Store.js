import { configureStore } from "@reduxjs/toolkit";
import postreducer from "./postSlice";



export const Store =configureStore({
    reducer:{
       post :postreducer,
    }
})


