import { useSelector, useDispatch } from 'react-redux';
import * as C from './style';
import { logoutModal } from '../../actions/actions';

export const ModalDelet = () => {

  const dispatch = useDispatch();

  const handleCancelModal = () => {
    dispatch(logoutModal());
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