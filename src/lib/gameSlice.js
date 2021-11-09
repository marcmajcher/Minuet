import { createSlice } from '@reduxjs/toolkit';
import strings, { printString } from '../assets/strings-en';

const initialState = {
  debug: false,
  fps: 5,
  logEntries: [{ id: 0, text: strings.msg_log_start, type: 'gameop' }],
  logIdCounter: 1,
  paused: true,
  frozen: true,
  decants: 0,
  colonistId: -1,
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
    freeze: (state) => {
      state.paused = true;
      state.frozen = true;
    },
    start: (state) => {
      state.paused = false;
      state.frozen = false;
    },
    log: (state, { payload }) => {
      let message;
      if (typeof payload === 'object') {
        message = printString(payload);
      } else if (strings[payload]) {
        message = strings[payload];
      } else {
        message = payload;
      }
      if (message) {
        state.logEntries.push({
          text: message,
          id: state.logIdCounter,
          type: payload.type || 'foo',
        });
        state.logIdCounter += 1;
        if (process.env.NODE_ENV === 'development') {
          console.log('[LOG]', message);
        }
      }
    },
    decant: (state) => {
      state.paused = false;
      state.frozen = false;
      state.decants += 1;
    },
    setColonistId: (state, { payload }) => {
      state.colonistId = payload;
    },
  },
});

export const {
  pause,
  unpause,
  debug,
  setFPS,
  freeze,
  start,
  log,
  decant,
  setColonistId,
} = gameSlice.actions;
export default gameSlice.reducer;
