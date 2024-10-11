import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar/Navbar'
import Info from './components/Info/Info'
import Work from './components/Work/Works'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: < Work />,
  },
  {
    path:'/info',
    element:<Info />
  },
  {
    path:'/work/allergenius',
    element:<Info />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar />
      <RouterProvider router={router} />
  </StrictMode>,
)
