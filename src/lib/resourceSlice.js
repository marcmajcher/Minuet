import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  dummyResource: {
    amount: 0,
    rate: 1,
  },
};

export const counterSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    updateAllResources: (state, action) => {
      Object.entries(state).forEach(([resource, data]) => {
        state[resource].amount += (data.rate * action.payload) / 1000;
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
