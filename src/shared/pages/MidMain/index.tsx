import { useState } from 'react';
import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { Posts } from '../../components/Posts';
import * as C from './style';

export const MidMain = () => {
  const [posts, setPosts] = useState(false)

  return (
    <C.Container>
      <Header />
      <Post />
      {posts ?? <Posts />}
    </C.Container>
  )
}