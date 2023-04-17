import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import { modalReducerDelet }  from './modalDelet/reducer';
import { modalReducerEdit } from '../redux/modalEdit/reducer';
import { postReducer } from './post-reducer/reducer';
import { getReducer } from './get-reducer/reducer'

const rootReducer = combineReducers({
  userReducer,
  modalReducerDelet,
  modalReducerEdit,
  postReducer,
  getReducer
})

export default rootReducer;