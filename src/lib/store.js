import { configureStore } from '@reduxjs/toolkit';
import resourceSlice from './resourceSlice';
import gameSlice from './gameSlice';

export const store = configureStore({
  reducer: {
    resources: resourceSlice,
    game: gameSlice,
  },
});
