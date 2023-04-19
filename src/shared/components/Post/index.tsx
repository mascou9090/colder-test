import { useDispatch, useSelector } from 'react-redux';
import * as C from './style';
import { useState, useEffect} from 'react';
import { getPosts, loginPost } from '../../actions/actions';
import { actionPostRequest } from '../../actions/actionRequest';
import { actionGetRequest } from '../../actions/actionGet';

export const Post = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [corButton, setCorButton] = useState(false);
  const [dataRenders, setDataRenders] = useState();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((rootReducer:any) => rootReducer.userReducer)

  useEffect(() => {
    inputValue && textValue ? setCorButton(true) : setCorButton(false);
  }, [inputValue, textValue, dataRenders]);

  const handlePrevent = (e:any) => {
    !inputValue && !textValue && e.preventDefault(); 
    handlePostClick();
  };

  const handlePostClick = async () => {
    dispatch(loginPost({title: inputValue, content: textValue}));
    actionPostRequest({
      "username": currentUser.email,
      "title": inputValue,
      "content": textValue,
    });
    const posts = await actionGetRequest();
    setDataRenders(posts);
    dispatch(getPosts(posts));
  };


  return (
    <C.Container valueInput={corButton}>
      <h2>What's on your mind?</h2>
      <div>
        <label>Title</label>
        <input type="text" placeholder='type' onChange={
          (e) => setInputValue(e.target.value)}/>
      </div>
      <div>
        <label>Content
          <textarea onChange={
            (e) => setTextValue(e.target.value)} 
            cols={92} rows={4} maxLength={5000} placeholder='Content here' />
        </label>
      </div>
      <div onClick={handlePrevent}>Create</div>
    </C.Container>
  )
};

