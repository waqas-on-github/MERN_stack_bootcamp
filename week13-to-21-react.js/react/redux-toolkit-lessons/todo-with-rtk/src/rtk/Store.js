import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./Todoslice";


export const Store =configureStore({
    reducer:{
        todo:todoreducer
    }
})