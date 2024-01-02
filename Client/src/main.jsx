import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router.jsx';
import Auth_Context from './Auth_Context/Auth_Context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth_Context>
      <RouterProvider router={router}></RouterProvider>
    </Auth_Context>
  </React.StrictMode>
)
