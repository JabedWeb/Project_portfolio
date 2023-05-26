import React, { useEffect, useState } from "react";
import google from "../../assets/Logo/google-1-11-1.png";
import { useNavigate } from "react-router-dom";
const FeaturedJob = ({ data }) => {

  const navigate = useNavigate()
  const handleDetals = (id) => {
    navigate(`/job/${id}`)
  }
  return (
    <>
      <div className="col-12 col-md-6 mb-4">
        <div className="data-job-wrapper border p-5">
          <div className="img">
            <img style={{width: '80px'}} src={data.image} alt="" />
          </div>
          <h4>{data.title}</h4>
          <p className="company_name">{data.company_name}</p>
          <div className="job-category-warea">
            <ul>
              <li>{data.job_type}</li>
             
            </ul>
          </div>
          <div className="job-location-warea">
            <i className="bx bx-map">{data.location}</i>
            <i className="bx bx-dollar-circle">Salary : {data.salary_range}</i>
          </div>
          <button onClick={() => handleDetals(data.id)} className="btn btn-md my-2">View Details</button>
        </div>
      </div>
    </>
  );
};

export default FeaturedJob;
