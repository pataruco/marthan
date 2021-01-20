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
      state.slideNumber += action.payload;
    },
  },
});

export const { toggleOpen, setSlideNumber } = gallerySlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGallery = (state: RootState) => state.gallery;

export default gallerySlice.reducer;
