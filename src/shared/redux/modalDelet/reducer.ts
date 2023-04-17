import { isOpenModalDelet } from "./action-types";

const inicitalState = {
  currentModalDelet: false,
  currentValue: null
}

export const modalReducerDelet = (state = inicitalState, action:any) => {
  switch(action.type) {
    case isOpenModalDelet.OPEN:
      return { ...state, currentModalDelet: true, currentValue: action.payload}
    case isOpenModalDelet.CLOSED:
      return { ...state, currentModalDelet: false}
    default:
      return state;
  }
}
