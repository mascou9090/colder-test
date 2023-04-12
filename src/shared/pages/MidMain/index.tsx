import { Header } from '../../components/Header';
import { ModalDelet } from '../../components/Modal';
import { Post } from '../../components/Post';
import { Posts } from '../../components/Posts';
import * as C from './style';

export const MidMain = () => {

  return (
    <>
      <C.Container>
        <Header />
        <Post />
        <Posts />
        <Posts />
        <Posts />
      </C.Container>
      {true && <ModalDelet />}
    </>
  )
}