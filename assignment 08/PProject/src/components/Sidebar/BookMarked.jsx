import React, { useEffect, useState } from 'react'

import './Sidebar.css'

const BookMarked = (props) => {
  const blogs= props.blog

  console.log("blog",blogs);


const [bookMarked, setBookMarked] = useState([])

useEffect(() => {
  const data = localStorage.getItem('storedData');
  let blog_items = []
  let store_blog=[]
  if(!data) return
  else {
    blog_items = JSON.parse(data)
  }

  console.log("blog_items",blog_items);

  for(const item of blog_items) {
    store_blog.push(item)
    console.log("store_blog",store_blog);
  }


  //when add new blog to local storage then it will update the state and show the item in the sidebar

  if (blog_items) {
    setBookMarked(store_blog)
  }

}, [blogs])

  return (
    <>
    <div>
    <h4>Book Marked Blogs : {bookMarked.length}</h4>
        <div >
            
            {
              bookMarked.map( item => {
                return <h4 className='card card_margin'>{item.post_title}</h4>
              })
            }
          
        </div>
    </div>
    </>
  )
}

export default BookMarked