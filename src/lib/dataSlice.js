import { createSlice } from '@reduxjs/toolkit';
import { rollBetween } from '../hooks/useRandom';
import initialState from './defaultData';

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    resetGame: (state) => {
      console.log('TK reset game data');
    },

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
      state[payload].count += 1;
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

    shiftActionMessage: (state, { payload }) => {
      if (state[payload].active) {
        state[payload].messages.splice(0, 1);
        if (state[payload].messages.length < 1) {
          state[payload].active = false;
        }
      }
    },
    incrementActionMessage: (state, { payload }) => {
      state[payload].count += 1;
    },

    removeFirstResourceMessage: (state, { payload }) => {
      delete state[payload].first;
    },
  },
});

export const {
  warmCooldowns,
  startCooldown,
  addColonistBiomass,
  decayBiomass,
  shiftActionMessage,
  incrementActionMessage,
  removeFirstResourceMessage,
} = dataSlice.actions;
export default dataSlice.reducer;
