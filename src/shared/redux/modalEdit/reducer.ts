import { isOpenModalEdit } from "./action-types"

const initialState = {
  currentModalEdit: false,
  currentValue: null
}

export const modalReducerEdit = (state = initialState, action:any) => {
  switch(action.type) {
    case isOpenModalEdit.OPEN:
      return { ...state, currentModalEdit: true, currentValue: action.payload};
    case isOpenModalEdit.CLOSED:
      return { ...state, currentModalEdit: false};
    default:
      return state;
  }
}