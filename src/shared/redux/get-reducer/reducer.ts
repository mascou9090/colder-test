import { ActionGet } from "./action-type"

const initialState = {
  currentDatas: null
}

export const getReducer = (state = initialState, action:any) => {
  if(action.type === ActionGet.TRUE) return { ...state, currentDatas: action.payload};
  return state;
}