import React from 'react'
import { useNavigate } from 'react-router-dom'

const AppliedCard = ({data}) => {

    const navigate = useNavigate()

const {id, image, title, company_name, job_type
, salary_range} = data


  return (
    <>

        <div className="card-wrapper w-75 mx-auto">
        <div className="row border rounded-2 my-3">
            <div className="col-12 col-md-2">
                <div className="image-wrap-job">
                    <img style={{width:'90px'}} src={image} alt="" />
                </div>
            </div>
            <div className="col-12 col-md-6 py-3 apply-card-details">
                <h3>{title}</h3>
                <p>{company_name}</p>
                <ul>
                    <li><a href="">{job_type}</a></li>
                    
                </ul>
                <ul>
                    <li>Dhaka, Bangladesh</li>
                    <li>Salary : {salary_range}</li>
                </ul>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center px-3">
                <button className='btn btn-lg ms-auto view-details-btn' onClick={()=>navigate(`/job/${id}`)}>View Details</button>
            </div>
        </div>
        </div>
    
    </>
  )
}

export default AppliedCard