import { configureStore } from "@reduxjs/toolkit";
import themeReduser from './reducers/themeSlice'

const store = configureStore({
    reducer: {
        themeReduser,
    }
})
export type RootState = ReturnType<typeof store.getState>

export default store