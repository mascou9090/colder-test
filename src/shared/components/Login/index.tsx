import { useState } from 'react';
import * as C from './style';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../../redux/user/actions';

export const Login = () => {
  const [inputValue, setInputValue] = useState('');

  const { currentUser } = useSelector((rootReducer: any) => rootReducer.userReducer)
  const dispatch = useDispatch();
  
  const handlePrevent = (e:any) => {
    !inputValue && e.preventDefault();
    handleLoginClick();
  }

  const handleLoginClick = () => {
    dispatch(loginUser({ email: 'mascou@email.com'}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  }


  return (
    <C.Container>
      <h2>Welcome to CodeLeap network!</h2>
      <div>
        <label>Please enter your username</label>
        <input 
          type="email" 
          placeholder='type' 
          onChange={(event) => setInputValue(event.target.value)} />
      </div>
      <C.Button valueInput={inputValue}>
        <Link onClick={(e) => handlePrevent(e)} to="midmain">
          ENTER
        </Link>
      </C.Button>
    </C.Container>
  )
};