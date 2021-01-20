import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import backgroundImagePaths from '../../components/gallery/paths';

interface HeroState {
  backgroundImagePath: string;
}

const getRandomBackgroundImageIndex = (
  min: number = 0,
  max: number = backgroundImagePaths.length,
) => Math.random() * (max - min) + min;

const initialState: HeroState = {
  backgroundImagePath:
    backgroundImagePaths[getRandomBackgroundImageIndex()][800],
};

export const heroSlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setRandomBackgroundImageIndex: (state) => {
      state.backgroundImagePath =
        backgroundImagePaths[getRandomBackgroundImageIndex()][800];
    },
  },
});

export const { setRandomBackgroundImageIndex } = heroSlice.actions;

export const selectHero = (state: RootState) => state.hero;

export default heroSlice.reducer;
