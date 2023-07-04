import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActivateUserPayload, SignInUserPayload, SignUpUserPayload, UserInfoData } from '../@types';
import { ACCESS_TOKEN_KEY } from 'src/utils/constants';
import { RootState } from '../store';

type initialState = {
    accessToken: string,
    userInfo: UserInfoData | null,
}

const initialState: initialState = {
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || '',
    userInfo: null,
};
const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        signUpUser: (_, __: PayloadAction<SignUpUserPayload>) => { },

        signInUser: (_, __: PayloadAction<SignInUserPayload>) => { },

        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload
        },
        activateUser: (_, __: PayloadAction<ActivateUserPayload>) => { },

        getUserInfo: (_, __: PayloadAction<undefined>) => { },


        setUserInfo: (state, action: PayloadAction<UserInfoData | null>) => {
            state.userInfo = action.payload

        },
    },
})

export const { signUpUser, signInUser, setAccessToken, activateUser, setUserInfo, getUserInfo } = authSlice.actions

export const AuthSelectors = {
    getLoggedIn: (state: RootState) => !!state.authReducer.accessToken,
    getUserInfo: (state: RootState) => state.authReducer.userInfo,
}

export default authSlice.reducer