import { useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { Posts } from '../../components/Posts';
import * as C from './style';
import { ModalDelet } from '../../components/Modal';
import { ModalEdit } from '../../components/ModalEdit';
import { Load } from '../../components/Load';
import { useEffect, useState } from 'react';

export const MidMain = () => {
  const [datas, setDatas] = useState();



  const { currentDatas } = useSelector(
    (rootReducer: any) => rootReducer.getReducer);
  const { currentModalDelet } = useSelector(
    (rootReducer: any) => rootReducer.modalReducerDelet);
  const { currentModalEdit } = useSelector(
    (rootReducer: any) => rootReducer.modalReducerEdit);

  useEffect(() => {
    setDatas(currentDatas);
  },[datas]);


  return (
    <C.Container>
      <Header />
      <Post />
      {!currentDatas && <Load />}
      {currentDatas && currentDatas?.results.map(
        (el: any) =>
          <Posts key={el.id} props={el} />
      )}
      {currentModalDelet && <ModalDelet />}
      {currentModalEdit && <ModalEdit />}
    </C.Container>
  )
}