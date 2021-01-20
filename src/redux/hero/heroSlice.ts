import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import backgroundImagePaths from '../../components/gallery/paths';

interface HeroState {
  backgroundImagePath: string;
  index: number;
}

const getRandomBackgroundImageIndex = (
  min: number = 0,
  max: number = backgroundImagePaths.length - 1,
) => Math.floor(Math.random() * (max - min) + min);

const index = getRandomBackgroundImageIndex();

const initialState: HeroState = {
  backgroundImagePath: backgroundImagePaths[index][800],
  index,
};

const nextIndex = (position: number): number =>
  position >= 0 && position < backgroundImagePaths.length ? position + 1 : 0;

export const heroSlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setRandomBackgroundImageIndex: (state) => {
      state.index = nextIndex(state.index);
      state.backgroundImagePath = backgroundImagePaths[state.index][800];
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
