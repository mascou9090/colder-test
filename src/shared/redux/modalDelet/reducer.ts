import { isOpenModalDelet } from "./action-types";

const inicitalState = {
  currentModalDelet: false
}

export const modalReducerDelet = (state = inicitalState, action:any) => {
  switch(action.type) {
    case isOpenModalDelet.OPEN:
      return { ...state, currentModalDelet: true}
    case isOpenModalDelet.CLOSED:
      return { ...state, currentModalDelet: false}
    default:
      return state;
  }
}
