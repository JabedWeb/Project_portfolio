import React, { useEffect, useState } from "react";
import "./details.css";
import { useLoaderData, useParams } from "react-router-dom";
import { storeData } from "../../utility/helper";

const JobDetails =  () => {

  const {id} = useParams()
  const singel  =  useLoaderData()
  const [data, setData] = useState({})
  const [apply, setApply] = useState(false)
  // store data to localStorage
  const hadnleStorage = async (ids) => {
    const setItem = await storeData(ids)
    setApply(true)
  }
  useEffect( () => {
    const chekStorage = localStorage.getItem('applied')
    console.log(chekStorage)
    if (chekStorage) {
     const data = JSON.parse(chekStorage).find(data => data.id == id)
      if (data) {
        setApply(true)
      }
    }else{
      setApply(false)
    }
  }, [apply])

  console.log(apply);
  return (
    <>
      <div className="statistics-details d-flex justify-content-center align-items-center">
        <h2>Job Details</h2>
      </div>

      <div className="deatils-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <p>
                <span className="bol-text">Job Description : </span> {singel.job_description}
              </p>
              <p>
                <span className="bol-text">Job responsibility : </span> {singel.job_responsibility}
              </p>
              <p>
                <span className="bol-text"> Educational requirements : </span> {singel.educational_requirements}
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="job-details-right-wrapper mt-sm-2">
                <h4>Job Details</h4>
                <hr />
                <p>Salary : {singel.salary_range} (Per Month)</p>
                <p> Job Title : {singel.title}</p>
                <h4>Contact Information</h4>
                <hr />
                <p>Phone : 01750-00-00-0</p>
                <p> Address : {singel.location}</p>
                {
                  apply || <button className="btn btn-lg w-100 mt-3" onClick={(e) => hadnleStorage(singel.id)}>Apply Now</button>
                }
                {
                  apply && <button className="btn btn-lg w-100 mt-3" disabled>Applied</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
