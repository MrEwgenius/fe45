import { all, takeLatest, call, put } from "redux-saga/effects";
import { ApiResponse } from 'apisauce'

import API from "src/utils/api";

import {  PostsData } from "../@types";
import { getPostList, setPostsList } from "../reducers/postSlice";


//запуск ракеты
function* postWorker() {



    const response: ApiResponse<PostsData> = yield call(
        API.getPosts,
    )
    //дата и ок -- стандарт 
    if (response.data && response.ok) {
        yield put(setPostsList(response.data.results))
        console.log(1);
        
    } else {
        console.log('sign Up User Error');

    }
}


// gthtl rjcvjcjv
// перед космосом 
export default function* postSagaWatcher() {
    yield all([takeLatest(getPostList, postWorker)])
}