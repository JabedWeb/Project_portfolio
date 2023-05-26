import React from 'react'
import Avatar from '../Avatar/Avatar'

const Header = (props) => {
  const {setShowModal, showModal} = props.showHide
  return (
    <>
        <header className='py-3 border-bottom' >
            <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-8">
                    <h2 className='text-sm-center text-md-start'>Knowledge Cafe</h2>
                  </div>
                  <div className="col-sm-12 col-md-4 d-flex gap-3">
                      <button onClick={ () => (setShowModal(!showModal))} className='btn btn-success'>Show ALL Questions Answer</button>
                      <Avatar/>
                  </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header