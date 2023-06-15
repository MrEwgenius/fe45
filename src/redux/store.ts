import { configureStore } from "@reduxjs/toolkit";
import themeReduser from './reducers/themeSlice'
import postReduser from './reducers/postSlice'
import imageReduser from './reducers/imageSlice'

const store = configureStore({
    reducer: {
        themeReduser,
        postReduser,
        imageReduser,
    }
})
export type RootState = ReturnType<typeof store.getState>

export default store