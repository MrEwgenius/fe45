import * as React from 'react';
import { useDispatch } from 'react-redux';
import { LikeStatus, Post, SaveStatus } from 'src/@types';
import { setSelectedImage, setSelectedImageModalOpened } from 'src/redux/reducers/imageSlice';
import { setLikeStatus, setSavedStatus, setSelectedPost, setSelectedPostModalOpened } from 'src/redux/reducers/postSlice';

const useCardActions = () => {

    const dispatch = useDispatch()

    const onStatusClick = (card: Post) => (status: LikeStatus) => {
        dispatch(setLikeStatus({ card, status }))
    }
    const onSavedStatus = (card: Post) => (status: SaveStatus) => {
        dispatch(setSavedStatus({ card, status }))
    }
    const onOpenClick = (cardsList: string) => () => {
        dispatch(setSelectedImageModalOpened(true))
        dispatch(setSelectedImage(cardsList))
    }

    const onMoreClick = (post: Post) => () => {
        dispatch(setSelectedPostModalOpened(true))
        dispatch(setSelectedPost(post))
    }

    return { onStatusClick, onSavedStatus, onMoreClick, onOpenClick }

}

export default useCardActions