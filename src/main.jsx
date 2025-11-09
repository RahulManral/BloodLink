import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Components/Layout.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'
import Donate from './Pages/Donate.jsx'
import Connect from './Pages/Connect.jsx'
import './Style/index.css'
import DeleteData from './Pages/DeleteData.jsx'
import { startDataCleanup } from './utils/dataCleanup';


startDataCleanup();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/donate' element={<Donate/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/connect' element={<Connect/>}/>
      <Route path='/delete' element={<DeleteData/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
