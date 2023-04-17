import { useDispatch } from 'react-redux';
import * as C from './style';
import { getPosts, logoutModalEdit } from '../../actions/actions';
import { isOpenModalEdit } from '../../redux/modalEdit/action-types';
import { actionPatchRequest } from '../../actions/actionEdit';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { actionGetRequest } from '../../actions/actionGet';

export const ModalEdit = () => {


  const [currentTitle, setCurrentTitle] = useState('')
  const [currentContent, setCurrentContent] = useState('')
  const { currentValue } = useSelector(
    (rootReducer:any) => rootReducer.modalReducerEdit)

  const dispatch = useDispatch();

  const handleCancelModal = () => {
    dispatch(logoutModalEdit(isOpenModalEdit.CLOSED));
  }

  const title = currentTitle;
  const content = currentContent;
  const id = currentValue !== null ? currentValue : 0;

  const handleEdit = async () =>  {
    actionPatchRequest(id, title, content);
    const posts = await actionGetRequest();   
    dispatch(getPosts(posts));
  }



  return (
    <C.ModalContainer>
      <C.ModalInsid>
        <p>Edit Item</p>
        <C.inputDiv>
          <label>Title</label>
          <input onChange={(e) => setCurrentTitle(e.target.value)} type="text" placeholder='Type' />
          <label>
            Content
            <textarea onChange={(e) => setCurrentContent(e.target.value)} cols={79} rows={4} maxLength={5000} placeholder='Content here' />
          </label>
        </C.inputDiv>
        <div>
          <button onClick={handleCancelModal}>Cancel</button>
          <button onClick={handleEdit}>Save</button>
        </div>
      </C.ModalInsid>
    </C.ModalContainer>
  )
}