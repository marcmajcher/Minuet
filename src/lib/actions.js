export const setHeartbeat = (beat) => ({
  type: 'SET_HEARTBEAT',
  payload: beat,
});

export const updateAllResources = (ms) => ({
  type: 'UPDATE_ALL_RESOURCES', ms
})

export const addResourceAmount = (resource, amount) => ({
type: 'ADD_RESOURCE_AMOUNT', resource, amount
})

export const setResoruceRate = (resource, rate) => ({
  type: 'SET_RESOURCE_RATE', resource, rate
})

export const pause = () => ({type: 'PAUSE'})
export const start = () => ({type: 'START'})