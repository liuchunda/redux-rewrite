
import actionTypes from '../action-types'
function reducer (state='red',atcion){
  switch(atcion.type){
    case actionTypes.UPDATECOLOR:
      return atcion.data;
    default:
      return state
  }
}
export default reducer