import React from 'react'
import './Sidebar.css'
import BookMarked from './BookMarked'
import TotalTimer from './TotalTimer'

const Sidebar = (props) => {
  const {setPosts, setTime, posts} = props.setItems

  // Clear Storage Data 
  const handleStorageClear = () => {
    localStorage.clear()
    setPosts([])
    setTime(0)
  }

  return (
    <>
        <div className="sidebar-bg p-3 ">
            <TotalTimer timer={props.time} handle={props.handle}/>
            <BookMarked blog={posts}></BookMarked>
            <button onClick={handleStorageClear} className='btn btn-danger btn-lg w-100'>Clear All</button>
        </div>
    </>
  )
}

export default Sidebar