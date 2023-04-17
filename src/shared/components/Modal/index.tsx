import { useDispatch } from 'react-redux';
import * as C from './style';
import { getPosts, logoutModalDelet } from '../../actions/actions';
import { isOpenModalDelet } from '../../redux/modalDelet/action-types';
import { useSelector } from 'react-redux';
import { actionDeleteRequest } from '../../actions/actionDelet';
import { actionGetRequest } from '../../actions/actionGet';

export const ModalDelet = () => {

  const dispatch = useDispatch();

  const { currentValue } = useSelector(
    (rootReducer:any) => rootReducer.modalReducerDelet
  )

  const handleCancelModal = () => {
    dispatch(logoutModalDelet(isOpenModalDelet.CLOSED));
  }

  const id = currentValue;
  
  const handleDelet = async () => {
    actionDeleteRequest(id);
    const posts = await actionGetRequest();   
    dispatch(getPosts(posts));
  }


  return (
    <C.ModalContainer>
      <C.ModalInsid>
        <p>Are you sure you want to delete this item?</p>
        <div>
          <button onClick={handleCancelModal}>Cancel</button>
          <button onClick={handleDelet}>Delete</button>
        </div>
      </C.ModalInsid>
    </C.ModalContainer>
  )
}