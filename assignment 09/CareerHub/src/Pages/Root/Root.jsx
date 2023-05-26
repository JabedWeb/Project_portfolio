import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { getData } from '../../utility/helper'
import { useEffect } from 'react'

const Root = () => {



  return (
    <>
        <Header></Header>
        <Outlet ></Outlet>
        <Footer></Footer>
    
    </>

  )
}

export default Root