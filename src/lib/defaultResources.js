const defaultResources = {
  stability: {
    id: 1,
    name: 'Stability',
    amount: 100,
    rate: -1.67,
    max: 1000,
    type: 'common',
    state: 'hidden',
  },
  xp: {
    id: 3,
    name: 'Experience',
    amount: 0,
    rate: 0,
    max: 60,
    type: 'common',
    state: 'hidden',
  },
  biomass: {
    id: 4,
    name: "Biomass",
    amount: 0,
    rate: 0,
    max: 200,
    type: 'common',
    state: 'hidden',
  },
  egregore: {
    id: 20,
    name: 'Egregore',
    amount: 0,
    rate: 0,
    max: Number.MAX_VALUE,
    type: 'persistent',
    state: 'hidden',
  },
};

export default defaultResources;
