import { configureStore } from '@reduxjs/toolkit';
import resourceSlice from './resourceSlice';
import gameSlice from './gameSlice';
import dataSlice from './dataSlice';

export const store = configureStore({
  reducer: {
    resources: resourceSlice,
    game: gameSlice,
    data: dataSlice
  },
});
