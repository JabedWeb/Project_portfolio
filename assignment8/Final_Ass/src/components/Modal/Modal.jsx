import React from 'react'

const Modal = (props) => {
    const {setShowModal, showModal} = props.showHide
    const modalStyle = {
        width : '100%',
        height : '100vh',
        position : 'fixed',
        top : '0',
        left : '0',
        right : '0',
        bottom : '0',
        backgroundColor : '#00000069',
        zIndex : '99999'


    }
  return (
    <>
        <div style={modalStyle} className="modal-wprapper">
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="card h-50 overflow-scroll">
                    <div className="card-body">
                        <div className="card-header d-flex justify-content-between">
                        <h3>Answer's of the Questions</h3>
                        <span onClick={ () => (setShowModal(!showModal))} className='btn-close btn'></span>
                        </div>
                        <div className="card-body">
                            <h4>Q1. What are the Props and state difference?</h4>
                            <p>Props is the type of object thats stores the data as attributes.  where state is a react hook where we can store anydata and can pass to any component with props.</p>

                            <h4>Q2. What is Use State Hook?</h4>
                            <p>UseState hook is a hook of ReactJs which run asynchonously after loading the components but we can run it with the dependencies when the state changes. usually we use this to get the data from apis on loading the dom.</p>

                            <h4>Q3. How useEffect Load Data?</h4>
                            <p>UseEffect Load data asynchonusly with fetch from api on dependency or epmty dependency</p>

                            <h4>Q4. How React Works?</h4>
                            <p>React re-construct DOM in JavaScript and Show only those changes to the DOM which have changed!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Modal