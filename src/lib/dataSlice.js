import { createSlice } from '@reduxjs/toolkit';
import initialState from './defaultData';

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    warmCooldowns: (state, { payload }) => {
      Object.entries(state).forEach(([key, data]) => {
        const ms = payload / 1000;
        if (data.type === 'cooldown' && data.seconds > 0) {
          state[key].seconds = Math.max(data.seconds - ms, 0);
        }
      });
    },
    startCooldown: (state, { payload }) => {
      state[payload].seconds = state[payload].max;
    },
  },
});

export const { warmCooldowns, startCooldown } = dataSlice.actions;
export default dataSlice.reducer;
