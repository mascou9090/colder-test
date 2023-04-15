import { useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { Posts } from '../../components/Posts';
import * as C from './style';
import { ModalDelet } from '../../components/Modal';
import { ModalEdit } from '../../components/ModalEdit';

export const MidMain = () => {

  const { currentModalDelet } = useSelector((rootReducer:any) => rootReducer.modalReducerDelet)
  const { currentModalEdit } = useSelector((rootReducer:any) => rootReducer.modalReducerEdit)

  return (
    <C.Container>
      <Header />
      <Post />
      <Posts />
      {currentModalDelet && <ModalDelet />}
      {currentModalEdit && <ModalEdit />}
    </C.Container>
  )
}
//