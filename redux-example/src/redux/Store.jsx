import {configureStore} from '@reduxjs/toolkit'
import { counterSlice } from './slice/counter'

export const Store = configureStore({
    reducer: {
        counter: counterSlice
    }
})