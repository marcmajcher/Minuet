import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  dummyResource: {
    id: 1,
    name: "Dummy Resource",
    amount: 0,
    rate: 1.2,
    max: 300,
    state: 'hidden',
  },
  bogusResource: {
    id: 2,
    name: "Bogusium",
    amount: 0,
    rate: 1,
    max: 100,
    state: 'active',
  },
  notAResource: {
    id: 3,
    name: "NaNa Burgers",
    amount: 0,
    rate: 3,
    max: 800,
    state: 'inactive',
  },
};

export const counterSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    updateAllResources: (state, action) => {
      Object.entries(state).forEach(([resource, data]) => {
        const newAmount = state[resource].amount + (data.rate * action.payload) / 1000
        state[resource].amount = Math.min(newAmount, state[resource].max);
      });
    },
    setResourceRate: (state, action) => {
      const { resource, rate } = action.payload;
      state[resource].rate = rate;
    },
  },
});

export const { updateAllResources, setResourceRate } = counterSlice.actions;
export default counterSlice.reducer;
