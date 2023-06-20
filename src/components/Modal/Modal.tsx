import React, { FC } from 'react';


import ReactModal from 'react-modal'
import { Children, Theme } from 'src/@types';
import style from './Modal.module.scss'
import { CloseIcon } from 'src/assets/icons';
import { useThemeContext } from 'src/context/Theme';
import classNames from 'classnames';


type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    children: Children,
}



const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {

    const { themeValue } = useThemeContext()

    return (
        <ReactModal
            className={classNames(style.containerModal, { [style.dark]: themeValue === Theme.Dark })}
            onRequestClose={onClose}
            isOpen={isOpen}
        >

            <div
                className={style.close}
                onClick={onClose}
            >
                <CloseIcon fill='black' />

            </div>

            {children}
        </ReactModal >
    );
}

export default Modal;