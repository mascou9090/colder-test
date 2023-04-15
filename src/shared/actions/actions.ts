import { UserActionTypes, isOpenModal } from "./action-types"

export const loginUser = (payload: any) => ({
    type : UserActionTypes.LOGIN,
    payload,
  
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT
})

export const loginModal = () => ({
  type: isOpenModal.OPEN
})

export const logoutModal = () => ({
  type: isOpenModal.CLOSED
})