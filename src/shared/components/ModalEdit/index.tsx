import { useDispatch } from 'react-redux';
import * as C from './style';
import { logoutModalEdit } from '../../actions/actions';
import { isOpenModalEdit } from '../../redux/modalEdit/action-types';

export const ModalEdit = () => {

  const dispatch = useDispatch();

  const handleCancelModal = () => {
    dispatch(logoutModalEdit(isOpenModalEdit.CLOSED));
  }


  return (
    <C.ModalContainer>
      <C.ModalInsid>
        <p>Edit Item</p>
        <C.inputDiv>
          <label>Title</label>
          <input type="text" placeholder='Type' />
          <label>
            Content
            <textarea  cols={79} rows={4} maxLength={5000} placeholder='Content here' />
          </label>
        </C.inputDiv>
        <div>
          <button onClick={handleCancelModal}>Cancel</button>
          <button>Save</button>
        </div>
      </C.ModalInsid>
    </C.ModalContainer>
  )
}