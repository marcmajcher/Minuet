import { createSlice } from '@reduxjs/toolkit';
import strings, { printString } from '../assets/strings-en';

const initialState = {
  debug: false,
  fps: 5,
  logEntries: [strings.msg_log_start],
  paused: true,
  frozen: true,
  decants: 0,
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
      let message;
      if (typeof action.payload === 'object') {
        message = printString(action.payload);
      } else if (strings[action.payload]) {
        message = strings[action.payload];
      } else {
        message = action.payload;
      }
      state.logEntries.push(message);
    },
    decant: (state) => {
      state.paused = false;
      state.frozen = false;
      state.decants += 1;
    },
  },
});

export const { pause, unpause, debug, setFPS, reset, start, log, decant } =
  gameSlice.actions;
export default gameSlice.reducer;
