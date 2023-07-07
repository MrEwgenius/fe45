import { all, takeLatest, call, put, debounce } from "redux-saga/effects";
import { ApiResponse } from 'apisauce'

import API from "src/utils/api";

import { PostsData } from "../@types";
import { getMyPosts, getPostList, getSinglePost, setMyPosts, setPostsList, setSinglePost, setSinglePostLoading } from "../reducers/postSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY } from "src/utils/constants";
import { callCheckingAuth } from "./helpers/callCheckingAuth";


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

function* getMyPostsWorker() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (accessToken) {

        // const response: ApiResponse<PostsData> = yield callCheckingAuth(API.getMyPosts)

        const response: ApiResponse<PostsData> = yield call(
            API.getMyPosts,
            accessToken,
        )
        if (response.status === 404) {
            yield put(setMyPosts([]))
        } else {
            if (response.data && response.ok) {
                yield put(setMyPosts(response.data.results))
            } else {
                console.log('No Posts');
            }
        }
    }

}


// перед космосом 
export default function* postSagaWatcher() {
    yield all([
        takeLatest(getPostList, postWorker),
        takeLatest(getSinglePost, getSinglePostWorker),
        takeLatest(getMyPosts, getMyPostsWorker),
    ])
}