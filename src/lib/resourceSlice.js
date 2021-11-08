import { createSlice } from '@reduxjs/toolkit';
import initialState from './defaultResources';

export const resourceSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    updateAllResources: (state, action) => {
      const seconds = action.payload / 1000;
      Object.entries(state).forEach(([resource, data]) => {
        if (data.rate !== 0) {
          const newAmount = Math.max(
            state[resource].amount + data.rate * seconds,
            0
          );
          state[resource].amount = Math.min(newAmount, state[resource].max);
        }
      });
    },
    setResourceRate: (state, action) => {
      const { resource, rate } = action.payload;
      state[resource].rate = rate;
    },
    showResource: (state, action) => {
      state[action.payload].state = 'active';
    },
    defaultResrouces: (state) => {
      Object.entries(initialState).forEach(([key, val]) => {
        state[key] = val;
      });
    },
  },
});

export const { updateAllResources, setResourceRate, defaultResrouces, showResource } =
  resourceSlice.actions;
export default resourceSlice.reducer;
