import { createSlice } from '@reduxjs/toolkit';
import { rollBetween } from '../hooks/useRandom';
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
    addColonistBiomass: (state, { payload }) => {
      state.available_biomass.amount += rollBetween(
        state.available_biomass.generate_min,
        state.available_biomass.generate_max,
        payload || 1
      );
    },
    decayBiomass: (state) => {
      state.available_biomass.amount -=
        state.available_biomass.amount * state.available_biomass.decay;
    },
  },
});

export const {
  warmCooldowns,
  startCooldown,
  addColonistBiomass,
  decayBiomass,
} = dataSlice.actions;
export default dataSlice.reducer;
