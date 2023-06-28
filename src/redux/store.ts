import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

import themeReduser from './reducers/themeSlice'
import postReduser from './reducers/postSlice'
import imageReduser from './reducers/imageSlice'
import authReducer from './reducers/authSlice'
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        themeReduser,
        postReduser,
        imageReduser,
        authReducer,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store