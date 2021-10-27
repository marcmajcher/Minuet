import { createStore } from 'redux';
const DEBUG = true;

const defaultStore = {
  paused: 'butt',
  heartBeat: undefined,
  resources: {
    dummyResource: {
      amount: 0,
      rate: 1,
    },
  },
};

function reducer(store = defaultStore, action) {
  DEBUG && console.log(`in reducer: ${JSON.stringify(action)}`);
  let resources;

  switch (action.type) {
    case 'PAUSE':
      return { ...store, paused: true };
    case 'START':
      return { ...store, paused: false };
    case 'SET_HEARTBEAT':
      return { ...store, heartBeat: action.payload };
    case 'UPDATE_ALL_RESOURCES':
      resources = { ...store.resources };
      Object.entries(resources).forEach((entry) => {
        const [resource, data] = entry;
        resources[resource] = {
          ...resources[resource],
          amount: resources[resource].amount + (data.rate * action.ms) / 1000,
        };
      });
      return { ...store, resources };
    case 'ADD_RESOURCE_AMOUNT':
      const amount = store.dummyResourceAmount + action.amount;
      resources = {
        ...store.resources,
        [action.resource]: {
          amount,
          rate: store.resources[action.resource].rate,
        },
      };
      return { ...store, resources };
    case 'SET_RESOURCE_RATE':
      resources = {
        ...store.resources,
        [action.resource]: {
          amount: store.resources[action.resource].amount,
          rate: action.rate,
        },
      };
      return { ...store, resources };
    default:
      return store;
  }
}

export const store = createStore(reducer, defaultStore);
