import { createSlice } from '@reduxjs/toolkit';
import strings from '../assets/strings-en';

const initialState = {
  debug: false,
  fps: 5,
  logEntries: [strings.msg_log_start],
  paused: true,
  frozen: true,
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
      state.paused = true;
      state.frozen = true;
    },
    start: (state) => {
      state.paused = false;
      state.frozen = false;
    },
    log: (state, action) => {
      state.logEntries.push(action.payload);
    },
  },
});

export const { pause, unpause, debug, setFPS, reset, start, log } =
  gameSlice.actions;
export default gameSlice.reducer;
