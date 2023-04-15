import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import { modalReducerDelet }  from './modalDelet/reducer';
import { modalReducerEdit } from '../redux/modalEdit/reducer'

const rootReducer = combineReducers({ userReducer, modalReducerDelet, modalReducerEdit })

export default rootReducer;