import { createSlice } from '@reduxjs/toolkit';
import initialState from './defaultResources';

export const counterSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    updateAllResources: (state, action) => {
      Object.entries(state).forEach(([resource, data]) => {
        const newAmount =
          state[resource].amount + (data.rate * action.payload) / 1000;
        state[resource].amount = Math.max(
          Math.min(newAmount, state[resource].max),
          0
        );
      });
    },
    setResourceRate: (state, action) => {
      const { resource, rate } = action.payload;
      state[resource].rate = rate;
    },
    reset: (state) => {
      Object.entries(initialState).forEach(([key, val]) => {
        state[key] = val;
      });
    },
  },
});

export const { updateAllResources, setResourceRate, reest } =
  counterSlice.actions;
export default counterSlice.reducer;
