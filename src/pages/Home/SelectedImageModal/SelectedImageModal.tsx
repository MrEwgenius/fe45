import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'src/components/Modal/Modal';
import { ImageSelectors, setSelectedImage, setSelectedImageModalOpened } from 'src/redux/reducers/imageSlice';

const SelectedImageModal = () => {

    const isOpened = useSelector(ImageSelectors.getSelectedImageModalOpened)

    const selectedImage = useSelector(ImageSelectors.getSelectedImage)

    const dispatch = useDispatch()

    const onCloseModal = () => {
        dispatch(setSelectedImageModalOpened(false))
        dispatch(setSelectedImage(''))
    }


    return selectedImage ? (
        <Modal isOpen={isOpened} onClose={onCloseModal} >
            <img src={selectedImage}  />
        </Modal>
    ) : null
}

export default SelectedImageModal;