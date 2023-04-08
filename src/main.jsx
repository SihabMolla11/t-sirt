import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import OrderReiew from './Components/OrderReview/OrderReiew';
import Contract from './Components/Contract/Contract';
import Grandpa from './Components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('t-sirts.json')
      },
      {
        path:'/review',
        element:<OrderReiew></OrderReiew>
      },
      {
        path:'/contract',
        element:<Contract></Contract>
      },
      {
        path:'/grandpa',
        element: <Grandpa/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
