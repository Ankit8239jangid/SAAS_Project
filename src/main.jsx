import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import CardList from './Component/CardList.jsx';
import RestorentMenu from './Component/RestorentMenu.jsx';
import About from './Component/About.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}>
      <Route path='/' element={<CardList/>}/>
      <Route path='/restorent-menu/:resId' element={<RestorentMenu/>}/>
      <Route path='/about' element={<About/>}/>


      </Route>
    </Route> 
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
