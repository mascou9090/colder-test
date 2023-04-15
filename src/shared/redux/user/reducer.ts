import { UserActionTypes } from "../../actions/action-types";

const inicitalState = {
  currentUser: null,
}
export const userReducer = (state = inicitalState, action: any) => {
  switch(action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload};
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null};
    default:
      return state;
  }
};

