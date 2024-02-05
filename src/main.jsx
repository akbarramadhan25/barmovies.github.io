import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Container from './Container'
import Movie from './showDetails'


const router = createBrowserRouter([
  {
    path : '/',
    element: <div className='w-[100%] -mt-14 h-[100%] bg-slate-800 py-20'>
                <Container />
             </div>
  },
  {
    path : '/movie/:id',
    element : <Movie />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
