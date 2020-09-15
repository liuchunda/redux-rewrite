import colorReducer from './color'
import userReducer from './user'
import {combineReducers} from '../../redux/index'

const comboundReducer = combineReducers({color:colorReducer,user:userReducer})
export default comboundReducer