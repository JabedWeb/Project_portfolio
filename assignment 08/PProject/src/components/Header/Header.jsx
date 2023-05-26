import React from 'react'
import Avatar from '../Avatar/Avatar'

const Header = () => {
  return (
    <>
        <header className='py-3 border-bottom' >
            <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-8">
                    <h2 className='text-sm-center'>Knowledge Cafe</h2>
                  </div>
                  <div className="col-sm-12 col-md-4 text-end text-sm-center">
                      <Avatar/>
                  </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header