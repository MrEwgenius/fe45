import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { ApiResponse } from 'apisauce'

import API from "src/utils/api";
import { activateUser, getUserInfo, setAccessToken, setUserInfo, signInUser, signUpUser } from "src/redux/reducers/authSlice";

import { ActivateUserPayload, SignInResponseData, SignInUserPayload, SignUpUserPayload, UserInfoData, UserInfoDataPayload, signUpResponseData } from "../@types";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/utils/constants";

function* signUpUserWorker(action: PayloadAction<SignUpUserPayload>) {

    const { data, callback } = action.payload

    const response: ApiResponse<signUpResponseData> = yield call(
        API.signUpUser,
        data
    )
    if (response.data && response.ok) {
        callback();

    } else {
        console.error('sign Up User Error', response.problem);

    }
}

function* signInUserWorker(action: PayloadAction<SignInUserPayload>) {
    const { data, callback } = action.payload

    const response: ApiResponse<SignInResponseData> = yield call(API.createToken, data)
    if (response.data && response.ok) {

        yield put(setAccessToken(response.data.access))

        localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access)
        localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh)

        callback();

    } else {
        console.error('sign In User Error', response.problem);
    }
}

function* activateUserWorker(action: PayloadAction<ActivateUserPayload>) {
    const { data, callback } = action.payload

    const response: ApiResponse<undefined> = yield call(
        API.activateUser,
        data
    )
    if (response.ok) {
        callback()
    } else {
        console.error('Activate User Error', response.problem);
    }

}


function* userInfoWorker() {

    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (accessToken) {
        const response: ApiResponse<UserInfoData> = yield call(
            API.getUserInfo,
            accessToken,
        )

        if (response.ok && response.data) {
            yield put(setUserInfo(response.data))

        } else {
            console.error('Get User Error', response.problem);
        }
    }
}

export default function* authSagaWatcher() {
    yield all([
        takeLatest(signUpUser, signUpUserWorker),
        takeLatest(signInUser, signInUserWorker),
        takeLatest(activateUser, activateUserWorker),
        takeLatest(getUserInfo, userInfoWorker),
    ])
}