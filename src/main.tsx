import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './AppRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AppRoutes} />
  </StrictMode>,
)
