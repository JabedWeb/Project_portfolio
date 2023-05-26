import React, { useEffect, useState } from 'react'

import './Sidebar.css'

const BookMarked = (props) => {
  const markedPosts= props.blog
  return (
    <>
    <div>
    <h4>Book Marked Blogs : {markedPosts.length}</h4>
        <div >
            
            {
              markedPosts && markedPosts.map( item => {
                return <h4 key={item.id} className='card card_margin'>{item.post_title}</h4>
              })
            }
          
        </div>
    </div>
    </>
  )
}

export default BookMarked