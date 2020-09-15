
import compose from './compose'
function apllyMiddleware(...middlewares){
  return function (createStore){
    return function(reducer,state){
      const store = createStore(reducer,state)
      let dispatch;
      const chain = middlewares.map((middleware)=>{
        return middleware({getState:store.getState})
      })
      dispatch = compose(...chain)(store.dispatch)
      return {...store,dispatch} 
    }
  }
}
// function(dispatch){
//   return function(action){
//     console.log("更新前",store.getState())
//     dispatch(action)
//     console.log("更新后",store.getState())
//   }
// }

// function loger(store){
//   return function(dispatch){
//     return function(action){
//       console.log("更新前",store.getState())
//       dispatch(action)
//       console.log("更新后",store.getState())
//     }
//   }
// }
export default apllyMiddleware