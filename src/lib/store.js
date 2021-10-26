import {createStore} from 'redux'

const defaultStore = {
  heartBeat: undefined,
};

function reducer(store = defaultStore, action) {
  console.log(`in reducer: ${JSON.stringify(action)}`);

  switch (action.type) {
    case 'SET_HEARTBEAT':
      return { ...store, heartBeat: action.payload };
    default:
      return store;
  }
}

export const store = createStore(reducer, defaultStore);


