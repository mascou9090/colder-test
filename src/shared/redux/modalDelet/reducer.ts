import { isOpenModal } from "../../actions/action-types";

const inicitalState = {
  currentModalDelet: false
}

export const modalReducerDelet = (state = inicitalState, action:any) => {
  switch(action.type) {
    case isOpenModal.OPEN:
      return { ...state, currentModalDelet: true}
    case isOpenModal.CLOSED:
      return { ...state, currentModalDelet: false}
    default:
      return state;
  }
}
