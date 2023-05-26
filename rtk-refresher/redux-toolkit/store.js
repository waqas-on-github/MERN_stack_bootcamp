import { configureStore } from "@reduxjs/toolkit";
import todoreducer from './slices/todoslice'
import cartreducer from './slices/cartslice'


const store = configureStore({
    reducer : {
        todo : todoreducer,
        cart : cartreducer 
    }
})


export  {
    store
}