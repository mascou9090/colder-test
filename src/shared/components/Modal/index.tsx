import { useDispatch } from 'react-redux';
import * as C from './style';
import { logoutModalDelet } from '../../actions/actions';
import { isOpenModalDelet } from '../../redux/modalDelet/action-types';

export const ModalDelet = () => {

  const dispatch = useDispatch();

  const handleCancelModal = () => {
    dispatch(logoutModalDelet(isOpenModalDelet.CLOSED));
  }


  return (
    <C.ModalContainer>
      <C.ModalInsid>
        <p>Are you sure you want to delete this item?</p>
        <div>
          <button onClick={handleCancelModal}>Cancel</button>
          <button>Delete</button>
        </div>
      </C.ModalInsid>
    </C.ModalContainer>
  )
}