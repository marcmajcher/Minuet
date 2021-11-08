const defaultData = {
  available_biomass: {
    amount: 0,
    decay: 0.5,
    generate_min: 60,
    generate_max: 90,
  },
  cool_explore: {
    type: 'cooldown',
    max: 12,
    seconds: 0,
  },

  msg_explore: {
    active: true,
    count: 0,
    messages: [
      { after: 1, chance: 1, text: 'msg_explore_1' },
      { after: 3, chance: 1, text: 'msg_explore_2' },
      { after: 9, chance: .25, text: 'msg_explore_3' },
      { after: 10, chance: .25, text: 'msg_explore_4' },
    ],
  },
};

export default defaultData;
