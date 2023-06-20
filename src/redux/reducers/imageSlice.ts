import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store';

type initialState = {
    isSelectedImageModalOpened: boolean,
    selectedImage: string,
}

const initialState: initialState = {
    isSelectedImageModalOpened: false,
    selectedImage: '',
};
const imageSlice = createSlice({


    name: 'imageReducer',
    initialState,
    reducers: {
        setSelectedImageModalOpened: (state, action: PayloadAction<boolean>) => {
            state.isSelectedImageModalOpened = action.payload;
        },
        setSelectedImage: (state, action: PayloadAction<string>) => {
            state.selectedImage = action.payload;
        }
    },
})

export const { setSelectedImageModalOpened, setSelectedImage } = imageSlice.actions

export const ImageSelectors = {
    getSelectedImageModalOpened: (state: RootState) =>
        state.imageReduser.isSelectedImageModalOpened,
    getSelectedImage: (state: RootState) => state.imageReduser.selectedImage,
}

export default imageSlice.reducer