import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'src/components/Modal/Modal';
import Posts, { PostsTypes } from 'src/components/Posts/Posts';
import { PostSelectors, setSelectedPost, setSelectedPostModalOpened } from 'src/redux/reducers/postSlice';

const SelectedPostModal = () => {

    const isOpened = useSelector(PostSelectors.getSelectedPostModalOpened)

    const selectedPost = useSelector(PostSelectors.getSelectedPost)
    const dispatch = useDispatch()

    const onCloseModal = () => {

        dispatch(setSelectedPostModalOpened(false))
        dispatch(setSelectedPost(null))
    }

    return selectedPost ? (
        <Modal isOpen={isOpened} onClose={onCloseModal}>
            <Posts onSavedClick={(_) => { }} onStatusClick={(_) => { }} type={PostsTypes.Large} {...selectedPost} />
        </Modal>
    ) : null
}

export default SelectedPostModal;
