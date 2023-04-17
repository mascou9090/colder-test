import { isOpenModalEdit } from "./action-types"

const initialState = {
  currentModalEdit: false
}

export const modalReducerEdit = (state = initialState, action:any) => {
  switch(action.type) {
    case isOpenModalEdit.OPEN:
      return { ...state, currentModalEdit: true};
    case isOpenModalEdit.CLOSED:
      return { ...state, currentModalEdit: false};
    default:
      return state;
  }
}