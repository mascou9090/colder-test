import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import { SignUp } from './shared/pages/SingUp';
import { MidMain } from './shared/pages/MidMain';
import { ErrorPage } from './shared/pages/ErrorPage';
import { Provider } from 'react-redux';
import store from './shared/redux/store';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <SignUp />
    },
    {
      path: "midmain",
      element: <MidMain />
    }
  ]
}
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);