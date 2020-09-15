
import actionTypes from '../action-types'
import {bindActionCreators} from '../../redux'
import store from '../index'
const actions={
  updateUser :function(value){
    return {type:actionTypes.UPDATEUSER,data:value}
  },
  updateColor:function(value){
    return  {type:actionTypes.UPDATECOLOR,data:value}
  }
}
export default bindActionCreators(actions,store.dispatch)