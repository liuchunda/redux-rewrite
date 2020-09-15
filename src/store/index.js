
import {createStore} from '../redux'
import reducer from './reducer'
import apllyMiddleware from '../redux/applyMiddleware'
function loger(store){
  return function(dispatch){
    return function(action){
      console.log("更新前",store.getState())
      dispatch(action)
      console.log("更新后",store.getState())
    }
  }
}
function loger2(store){
  return function(dispatch){
    return function(action){
      console.log("更新前2",store.getState())
      dispatch(action)
      console.log("更新后2",store.getState())
    }
  }
}
// function(dispatch,store){
//   console.log("更新之前",store.getState())
//   dispatch()
//   console.log("更新之后",store.getState())
// }
const store = apllyMiddleware(loger,loger2)(createStore)(reducer)
export default store