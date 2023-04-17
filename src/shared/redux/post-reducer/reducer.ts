import { TextActionTypes } from "./action-types"

const initialState = {
  currentPost: false,
}

export const postReducer = (state = initialState, action:any) => {
  switch(action.type) {
    case TextActionTypes.TRUE:
      return { ...state, currentPost: action.payload};
    case  TextActionTypes.FALSE:
      return { ...state, currentPost: false};
    default:
      return state;
  }
} 
