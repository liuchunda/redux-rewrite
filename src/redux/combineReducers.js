
function combineReducers(reducers) {
  let reducerKeys = Object.keys(reducers)
  let finalReducers = {}
  for (let i = 0; i < reducerKeys.length; i++) {
    let key = reducerKeys[i]
    if (typeof reducers[key] === 'function') {
      finalReducers[key]=reducers[key]
    }
  }
  return function finalReducer(state = {}, action) {
    let nextState = {}
    const finalReducerKeys = Object.keys(finalReducers)
    for (let i = 0; i < finalReducerKeys.length; i++) {
      let key = finalReducerKeys[i]
      nextState[key] = finalReducers[key](state[key], action);
    }
    return nextState
  }
}
export default combineReducers