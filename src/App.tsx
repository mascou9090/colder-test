import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Outlet />
    </div>
  );
}

export default App;
