import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Home = () => {
  return (
<>
<Header></Header>
    <div>Home</div>
    <Outlet></Outlet>
</>
  )
}

export default Home