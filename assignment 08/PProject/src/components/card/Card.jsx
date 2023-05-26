import React, { useState } from 'react'
import Avatar from '../Avatar/Avatar'
import TotalTimer from '../Sidebar/TotalTimer'

const Card = (props) => {
  const {id, user_name, user_photo, post_title, post_image, post_tags, read_time} = props.data

  return (
    <>

    <div className="card-wrapper w-75 mx-auto my-3">
        <div className="card">
            <div className="card-body">
                <img src="https://images.unsplash.com/photo-1530545232169-783ad58b026f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" className="card-img" />
                <div className="row p-3">
                    <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-12 d-flex gap-2">
                            <Avatar img={user_photo}/>
                            <div className="info-box">
                              <h6 className='username p-0 m-0 font-bold'>{user_name}</h6>
                              <p className='publishdate p-0 m-0'>Mar 14 (2 days ago)</p>
                            </div>
                          </div>
                          
                        </div>
                        
                    </div>
                    <div className="col-md-6 text-end">
                        <span style={{cursor:'pointer'}} onClick={() => props.handle(id)}>{read_time} min read <i className="fa-regular fa-bookmark"></i> </span>
                    </div>

                </div>
                <div className="row">
                          <div className="col">
                            <h2>{post_title}</h2>
                          </div>
                  </div>
                  <div className="row my-2">
                    <div className="col d-flex gap-2">
                      <span>#Programmers</span>
                      <span>#Programmers</span>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col">
                      <a href="#"  className='text-primary ' >Mark as Read</a>
                    </div>
                  </div>
                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Card