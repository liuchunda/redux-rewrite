
import actionTypes from '../action-types'
function reducer (state={userName:null,userId:null},atcion){
  switch(atcion.type){
    case actionTypes.UPDATEUSER:
      return atcion.data;
    default:
      return state
  }
}
export default reducer