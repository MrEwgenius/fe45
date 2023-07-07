import { all, takeLatest, call, put, debounce } from "redux-saga/effects";
import { ApiResponse } from 'apisauce'

import API from "src/utils/api";

import { PostsData } from "../@types";
import { getPostList, getSinglePost, setPostsList, setSinglePost, setSinglePostLoading } from "../reducers/postSlice";
import { PayloadAction } from "@reduxjs/toolkit";


//запуск ракеты
function* postWorker() {

    //Внутри воркера мы работаем с ответом с сервара Response
    // yield call -- вызов

    const response: ApiResponse<PostsData> = yield call(
        API.getPosts,
    )
    //дата и ок -- стандарт 
    if (response.data && response.ok) {
        yield put(setPostsList(response.data.results))

    } else {
        console.log('sign Up User Error');

    }
}

function* getSinglePostWorker(action: PayloadAction<string>) {

    yield put(setSinglePostLoading(true))

    const response: ApiResponse<undefined> = yield call(
        API.getSinglePost,
        action.payload
    )
    if (response.ok && response.data) {
        yield put(setSinglePost(response.data))
    } else {
        console.error('Activate User Error', response.problem);
    }
    yield put(setSinglePostLoading(false))

}


// gthtl rjcvjcjv
// перед космосом 
export default function* postSagaWatcher() {
    yield all([
        takeLatest(getPostList, postWorker),
        takeLatest(getSinglePost, getSinglePostWorker)
    ])
}