import { TextActionTypes,  } from "../redux/post-reducer/action-types";
import { UserActionTypes,  } from "../redux/user/action-types"

export const loginUser = (payload: any) => ({
    type : UserActionTypes.LOGIN,
    payload,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT
});

export const loginModalEdit = (dispatch:any) => ({
  type: dispatch
});

export const loginModalDelet = (dispatch:any) => ({
  type: dispatch
});

export const logoutModalEdit = (dispatch:any) => ({
  type: dispatch
});

export const logoutModalDelet = (dispatch:any) => ({
  type: dispatch
});

export const loginPost = (payload: any) => ({
  type: TextActionTypes.TRUE,
  payload,
});
