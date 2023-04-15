import { isOpenModal } from "../../actions/action-types"

const initialState = {
  currentModalEdit: false
}

export const modalReducerEdit = (state = initialState, action:any) => {
  switch(action.type) {
    case isOpenModal.OPEN:
      return { ...state, currentModalEdit: true};
    case isOpenModal.CLOSED:
      return { ...state, currentModalEdit: false};
    default:
      return state;
  }
}