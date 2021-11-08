const defaultResources = {
  stability: {
    id: 1,
    name: 'res_stability',
    amount: 100,
    rate: -1.67,
    max: 100,
    type: 'common',
    state: 'hidden',
  },
  xp: {
    id: 3,
    name: 'res_experience',
    amount: 0,
    rate: 0,
    max: 60,
    type: 'res_common',
    state: 'hidden',
  },
  biomass: {
    id: 4,
    name: 'res_biomass',
    amount: 0,
    rate: 0,
    max: 200,
    type: 'common',
    state: 'hidden',
  },
  available_biomass: { 
    id: -4,
    name: undefined,
    amount: 0,
    rate: 0,
    max: 200,
    type: 'system',
    state: 'hidden',
  },
  egregore: {
    id: 20,
    name: 'res_egregore',
    amount: 0,
    rate: 0,
    max: Number.MAX_VALUE,
    type: 'persistent',
    state: 'hidden',
  },
};

export default defaultResources;
