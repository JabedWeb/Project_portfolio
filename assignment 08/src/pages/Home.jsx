import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import TotalTimer from '../components/Sidebar/TotalTimer'
import { getData } from '../utility/getData'
import { toaster } from '../utility/toster'

const Home = () => {
  let total_time =0;

  const [posts, setPosts] = useState([])

  const [blogs,setBlogs ] = useState([])

  const handleReadTime =  (id) => {

      // get data from localhost
      const data = localStorage.getItem('storedData')
      let post = blogs.find( data => data.id === id)
      let newArray = []
      if (!data) {         
       
        newArray.push(post)
        setPosts(newArray);
        let stingify = JSON.stringify(newArray)
        localStorage.setItem('storedData', stingify)
        
      }else{
        let localData = localStorage.getItem('storedData')
        let items = JSON.parse(localData)
        console.log("localData",localData);

        // check if the post is already in the local storage or not
        let check = items.find( item => item.post_title === post.post_title)
        if (check) {
          return toaster()
        }else{
          newArray = [...items]
          newArray.push(post)
          setPosts(newArray)
          let stingify = JSON.stringify(newArray)
          
          localStorage.setItem('storedData', stingify)
        }
      
      }
    }

      
  useEffect(() => {
      fetch('db.json')
      .then( res => res.json())
      .then( data => {
        setBlogs(data);
      })
  }, [])


  return (
    <>
    <Header/>

    {/* Body part */}
    <section className="body-part">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 py-3">
            {
              blogs && blogs.map( (data, index) => {
                 return <Card data={data}   handle={handleReadTime} key={data.id}/>
              })
            }
              
          </div>
          <div className="col-sm-12 col-md-4 py-3">
              <Sidebar blog={posts}/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home