import React from 'react'

const TotalTimer = (props) => {
  
  return (
    <>
    <div className="card mb-4 border-info bg-light">
        <div className="card-body">
            <h4>Total Read Time <span className='total_time'>{props.timer}</span> Min</h4>
        </div>
    </div>
    </>
  )
}

export default TotalTimer