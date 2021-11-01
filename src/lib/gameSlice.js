import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  debug: false,
  fps: 5,
  gameState: 'decant',
  paused: true,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    pause: (state) => {
      state.paused = true;
    },
    unpause: (state) => {
      state.paused = false;
    },
    debug: (state, action) => {
      state.debug = action.payload;
    },
    setFPS: (state, action) => {
      state.fps = action.payload;
    },
    reset: (state) => {
      state.gameState = 'decant';
      state.paused = true;
    },
    start: (state) => {
      state.gameState = 'phase1';
      state.paused = false;
    },
  },
});

export const { pause, unpause, debug, setFPS, reset, start } =
  gameSlice.actions;
export default gameSlice.reducer;
