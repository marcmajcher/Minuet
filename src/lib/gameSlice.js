import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  debug: false,
  paused: false,
  fps: 5,
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
      state.fps = action.payload
    }
  },
});

export const { pause, unpause, debug, setHeartbeat, setFPS } = gameSlice.actions;
export default gameSlice.reducer;
