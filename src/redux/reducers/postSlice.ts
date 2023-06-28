import React from 'react';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { LikeStatus, Post, PostsList, SaveStatus } from 'src/@types';

import { all, takeLatest, call } from "redux-saga/effects";
import { ApiResponse } from 'apisauce'

import { signUpUser } from "src/redux/reducers/authSlice";
import { PostsData, SignUpUserPayload, signUpResponseData } from "../@types";
import API from "src/utils/api";

type initialState = {
    isSelectedPostModalOpened: boolean,
    selectedPost: Post | null,
    likedPosts: PostsList,
    dislikedPosts: PostsList,
    savedPosts: PostsList,
    postsList: PostsList,
}

const initialState: initialState = {
    isSelectedPostModalOpened: false,
    selectedPost: null,
    likedPosts: [],
    dislikedPosts: [],
    savedPosts: [],
    postsList: []
};
const postSlice = createSlice({


    name: 'postReducer',
    initialState,
    reducers: {
        setSelectedPostModalOpened: (state, action: PayloadAction<boolean>) => {
            state.isSelectedPostModalOpened = action.payload;
        },
        setSelectedPost: (state, action: PayloadAction<Post | null>) => {
            state.selectedPost = action.payload;
        },

        getPostList: (_, __: PayloadAction<undefined>) => { },

        setPostsList: (state, action: PayloadAction<PostsList>) => {
            state.postsList = action.payload;

        },


        setLikeStatus: (state, action: PayloadAction<{ card: Post, status: LikeStatus }>) => {
            const { card, status } = action.payload;
            const likedIndex = state.likedPosts.findIndex(item => item.id === card.id)
            const dislikedIndex = state.dislikedPosts.findIndex(item => item.id === card.id)
            const isLike = status === LikeStatus.Like
            const mainKey = isLike ? 'likedPosts' : 'dislikedPosts'
            const secondaryKey = isLike ? 'dislikedPosts' : 'likedPosts'
            const mainIndex = isLike ? likedIndex : dislikedIndex
            const secondaryIndex = isLike ? dislikedIndex : likedIndex

            if (mainIndex === -1) {
                state[mainKey].push(card)
            } else {
                state[mainKey].splice(mainIndex, 1)
            }
            if (secondaryIndex > -1) {
                state[secondaryKey].splice(secondaryIndex, 1)
            }

        },
        setSavedStatus: (state, action: PayloadAction<{ card: Post, status: SaveStatus }>) => {
            const { card, status } = action.payload;
            const savedIndex = state.savedPosts.findIndex(item => item.id === card.id)
            const isSaved = status === SaveStatus.Saved
            const mainIndex = isSaved ? savedIndex : 1

            mainIndex === -1 ?
                state.savedPosts.push(card)
                :
                state.savedPosts.splice(mainIndex, 1)
        }

    },
})


export const { setSelectedPostModalOpened, setSelectedPost, setLikeStatus, setSavedStatus, getPostList, setPostsList } = postSlice.actions

export const PostSelectors = {
    getSelectedPostModalOpened: (state: RootState) =>
        state.postReduser.isSelectedPostModalOpened,
    getSelectedPost: (state: RootState) => state.postReduser.selectedPost,
    getLikedPosts: (state: RootState) => state.postReduser.likedPosts,
    getDislikedPosts: (state: RootState) => state.postReduser.dislikedPosts,
    getSavedPosts: (state: RootState) => state.postReduser.savedPosts,
    getPostsList: (state: RootState) => state.postReduser.postsList
}



export default postSlice.reducer