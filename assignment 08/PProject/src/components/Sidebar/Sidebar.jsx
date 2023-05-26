import React from 'react'
import './Sidebar.css'
import BookMarked from './BookMarked'
import TotalTimer from './TotalTimer'

const Sidebar = (props) => {

  return (
    <>
        <div className="sidebar-bg p-3 ">
            <TotalTimer/>
            <BookMarked blog={props}></BookMarked>
        </div>
    </>
  )
}

export default Sidebar