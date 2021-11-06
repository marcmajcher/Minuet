import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  debug: false,
  fps: 5,
  gameState: 'decant',
  logEntries: ['--------'],
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
    log: (state, action) => {
      state.logEntries.push(action.payload);
    },
  },
});

export const { pause, unpause, debug, setFPS, reset, start, log } =
  gameSlice.actions;
export default gameSlice.reducer;
