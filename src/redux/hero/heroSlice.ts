import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import backgroundImagePaths from '../../components/gallery/paths';

interface HeroState {
  backgroundImagePath: string;
}

const getRandomBackgroundImageIndex = (
  min: number = 0,
  max: number = backgroundImagePaths.length - 1,
) => Math.floor(Math.random() * (max - min) + min);

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

let interval: NodeJS.Timeout;

export const changeBackgroundInterval = (): AppThunk => (dispatch) => {
  interval = setInterval(() => {
    dispatch(setRandomBackgroundImageIndex());
  }, 6000);

  console.log({ interval });
};

export const selectHero = (state: RootState) => state.hero;

export default heroSlice.reducer;
