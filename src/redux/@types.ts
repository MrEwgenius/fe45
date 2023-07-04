import { PostsList } from "src/@types"


export type PayloadWithDataAndCallback<Data> = {
    data: Data,
    callback: () => void,
}

export type SignUpUserData = {
    username: string,
    email: string,
    password: string,
}

export type signUpResponseData = {
    username: string,
    email: string,
    id: number,
}

export type SignUpUserPayload = PayloadWithDataAndCallback<SignUpUserData>

export type PostsData = {

    count: number,
    next: string,
    previous: null,
    results: PostsList,
}

export type SignInData = {
    email: string,
    password: string,
}

export type SignInResponseData = {
    access: string,
    refresh: string,
}

export type SignInUserPayload = PayloadWithDataAndCallback<SignInData>

export type ActivateUserData = {
    uid: string,
    token: string,

}

export type ActivateUserPayload = PayloadWithDataAndCallback<ActivateUserData>


export type UserInfoData = {
    username: string,
    id: number,
    email: string,
}

export type UserInfoDataPayload = PayloadWithDataAndCallback<UserInfoData>
