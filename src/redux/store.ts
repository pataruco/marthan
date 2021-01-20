import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import galleryReducer from './gallery/gallerySlice';
import heroReducer from './hero/heroSlice';

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    hero: heroReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
