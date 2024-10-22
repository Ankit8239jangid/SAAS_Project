import React from 'react'
import Nave_Bar from './Nave_Bar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ChatUI from '../Mini=Projects/Chat'
import Searching from '../Mini=Projects/minniy/searching'
import Clouser from '../Mini=Projects/minniy/Clouser/Clouser'
import App from '../App'

function Home() {
  return (
    <>
      <Nave_Bar />
      <Outlet />
      <Footer />2

      {/* <ChatUI/>  */}
      {/* <Searching /> */}
      {/* <Clouser/> */}
      {/* <App/> */}

    </>
  )
}

export default Home