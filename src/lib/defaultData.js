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
    count: 0,
    dropAt: 3,
  },

  droptable_explore: {
    drop_biomass: 0.25,
    drop_wire: 0.15,
    drop_scrap: 0.15,
  },

  drop_biomass: {
    resource: 'biomass',
    description: 'desc_biomass',
    first: 'msg_biomass_discover',
    min: 5,
    max: 20,
    limit: 'available_biomass',
  },
  drop_wire: {
    resource: 'wire',
    description: 'desc_wire',
    first: 'msg_wire_discover',
    min: 1,
    max: 4,
  },
  drop_scrap: {
    resource: 'scrap',
    description: 'desc_scrap',
    first: 'msg_scrap_discover',
    min: 2,
    max: 10,
  },

  msg_explore: {
    active: true,
    count: 0,
    messages: [
      { after: 1, chance: 1, text: 'msg_explore_1' },
      { after: 3, chance: 1, text: 'msg_explore_2' },
      { after: 9, chance: 0.25, text: 'msg_explore_3' },
      { after: 10, chance: 0.25, text: 'msg_explore_4' },
    ],
  },
};

export default defaultData;
