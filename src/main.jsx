import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/home.jsx';
import Error from './pages/error.jsx';

//import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
