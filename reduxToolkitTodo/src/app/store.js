import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer:todoReducer
})

// configureStore is a function that simplifies the store creation process and sets up good defaults for the store.