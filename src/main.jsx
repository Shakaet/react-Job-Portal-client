
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProviver from './AuthProviver.jsx'


createRoot(document.getElementById('root')).render(
  
    <AuthProviver>
      <RouterProvider router={router} />
    </AuthProviver>
  ,
)