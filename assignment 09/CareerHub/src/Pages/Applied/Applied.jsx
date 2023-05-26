import React, { useEffect, useState } from "react";
import AppliedCard from "../../components/AppliedJob/AppliedCard";

const Applied = () => {
  const [appliedJob, setAppliedJob] = useState([]);

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem("applied"));

    if (!oldData) {
      setAppliedJob([]);
    } else {
      setAppliedJob(oldData);
    }
  }, []);
  // handleChange
  const handleChange = (e) => {

    const oldData = JSON.parse(localStorage.getItem("applied"));
    const data = oldData.filter( data => data.job_type == e.target.value)
    
    if (data) {
      setAppliedJob(data)
    }
    
  }

  console.log(appliedJob);
  return (
    <>
      <div className="statistics-details d-flex justify-content-center align-items-center">
        <h2>Applied Job</h2>
      </div>

      <div className="deatils-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col">
                  <select onChange={handleChange} name="" id="" className="form-control w-25 ms-auto">
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Full-time">Full-time</option>
                  </select>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  {appliedJob &&
                    appliedJob.map((data, index) => {
                      return (
                        <AppliedCard key={data.id} data={data}></AppliedCard>
                      );
                    })}

                  {
                    appliedJob.length === 0 && <p className="text-center">No Data Found</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applied;
