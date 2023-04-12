import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import {useState} from 'react';

function App() {

  const[isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <GlobalStyle isOpen={isOpen}/>
      <Outlet />
    </div>
  );
}

export default App;
