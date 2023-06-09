import { useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { Posts } from '../../components/Posts';
import * as C from './style';
import { ModalDelet } from '../../components/Modal';
import { ModalEdit } from '../../components/ModalEdit';
import { Load } from '../../components/Load';

export const MidMain = () => {

  const { currentDatas } = useSelector(
    (rootReducer: any) => rootReducer.getReducer);
  const { currentModalDelet } = useSelector(
    (rootReducer: any) => rootReducer.modalReducerDelet);
  const { currentModalEdit } = useSelector(
    (rootReducer: any) => rootReducer.modalReducerEdit);

  return (
    <C.Container>
      <Header />
      <Post />
      {!currentDatas?.results && <Load />}
      {currentDatas?.results && currentDatas?.results?.map(
        (el: any) =>
          <Posts key={el.id} props={el} />
      )}
      {currentModalDelet && <ModalDelet />}
      {currentModalEdit && <ModalEdit />}
    </C.Container>
  )
}