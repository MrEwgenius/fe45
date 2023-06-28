import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SignUpUserPayload } from '../@types';

type initialState = {
}

const initialState: initialState = {
};
const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        signUpUser: (state, action: PayloadAction<SignUpUserPayload>) => { },
    },
})

export const { signUpUser } = authSlice.actions

export const AuthSelectors = {}

export default authSlice.reducer