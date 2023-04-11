import { useState } from 'react';
import * as C from './style';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [corButton, setCorButton] = useState("#ccc");
  const [inputValue, setInputValue] = useState('');


  return (
    <C.Container>
      <h2>Welcome to CodeLeap network!</h2>
      <div>
        <label>Please enter your username</label>
        <input type="email" placeholder='type' 
        onChange={(event) => setInputValue(event.target.value)} />
      </div>
      <C.Button valueInput={inputValue}>
        <Link to="midmain">
          ENTER
        </Link>
      </C.Button>
    </C.Container>
  )
};