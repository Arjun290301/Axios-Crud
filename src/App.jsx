import React from 'react'
import AppRouter from './Utils/AppRouter'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter(AppRouter)
  return <>
    <RouterProvider router={router} />

  </>
}

export default App
