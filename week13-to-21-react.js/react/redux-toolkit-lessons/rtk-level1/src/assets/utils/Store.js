import {configureStore}  from '@reduxjs/toolkit'
import counterReducer from '../../features/counter/Counterslice'


export const Store = configureStore({
    reducer:{
        counter : counterReducer,
    }
})
