
import isPureObject from './util/isPureObject'
import ActionType from './util/action-types'
function createStore(reducer,state){
  let currentReducer = reducer
  let currentState = state
  let subscribeList  = []
  function getState(){
    return currentState
  }
  function subscribe(subscriber){
    if(typeof subscriber !=="function"){
      throw Error(`${subscriber}不是一个函数`)
    }
    subscribeList.push(subscriber)
    let unsubscrbedFalg = false
    return function unsubscrbe(){
      if(unsubscrbedFalg){
        return
      }
      unsubscrbedFalg=true
      subscribeList.splice(subscribeList.indexOf(subscriber),1)
    }
  }
  function dispatch(action){
    if(!isPureObject(action)){
      throw Error(`action必须是一个纯对象`)
    }
    currentState= currentReducer(currentState,action)
    for(let i=0;i<subscribeList.length;i++){
      subscribeList[i]()
    }
  }
  dispatch({type:ActionType.INIT})
  return {
    getState,
    subscribe,
    dispatch
  }
}
export default createStore