import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './Components/Header/Admin/Admin.jsx';
import Home from './Pages/Home/Home.jsx';
import RecipesDetails from './Pages/RecipesDetails/RecipesDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "recipes/:id",
        element: <RecipesDetails/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
