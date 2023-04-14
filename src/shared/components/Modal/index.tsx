import * as C from './style';

export const ModalDelet = () => {
  return (
    <C.ModalContainer>
      <C.ModalInsid>
        <p>Are you sure you want to delete this item?</p>
        <div>
          <button>Cancel</button>
          <button>Delete</button>
        </div>
      </C.ModalInsid>
    </C.ModalContainer>
  )
}