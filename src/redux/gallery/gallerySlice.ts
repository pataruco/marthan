import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';

interface GalleryState {
  isOpen: boolean;
  slideNumber: number;
}

const initialState: GalleryState = {
  isOpen: false,
  slideNumber: 1,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },

    setSlideNumber: (state, action: PayloadAction<number>) => {
      state.slideNumber = action.payload;
    },
  },
});

export const { toggleOpen, setSlideNumber } = gallerySlice.actions;

export const selectGallery = (state: RootState) => state.gallery;

export default gallerySlice.reducer;
