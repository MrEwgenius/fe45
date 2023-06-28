import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, call } from "redux-saga/effects";
import { ApiResponse } from 'apisauce'

import API from "src/utils/api";
import { signUpUser } from "src/redux/reducers/authSlice";

import { SignUpUserPayload, signUpResponseData } from "../@types";

function* signUpUserWorker(action: PayloadAction<SignUpUserPayload>) {

    const { data, callback } = action.payload

    const response: ApiResponse<signUpResponseData> = yield call(
        API.signUpUser,
        data
    )
    if (response.data && response.ok) {
        callback();
        console.error('sign Up User Error', response.problem);

    } else {

    }
}

export default function* authSagaWatcher() {
    yield all([takeLatest(signUpUser, signUpUserWorker)])
}