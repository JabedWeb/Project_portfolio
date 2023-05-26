import React, { useEffect, useState } from "react";
import person from "../../assets/All-Images/P3OLGJ1 copy-1.png";
import JobCategory from "../../components/JobCategory/JobCategory";
import FeaturedJob from "../../components/FeaturedJob/FeaturedJob";
import { useLoaderData } from "react-router-dom";

const Home = () => {

  
  const allData = useLoaderData()
  const {categories, featured_jobs} = allData
 
  const [featuredJob, setFeaturedJob] = useState([])

  useEffect(() => {

    const initdata = featured_jobs.slice(0,4)
    setFeaturedJob(initdata)
  }, [])


  // view all list
  const handleViewAll = () => {
    setFeaturedJob(featured_jobs)
  }

  return (
    <>
      <section className="home-wrapper pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-start flex-column">
              <h2>
                One Step Closer To Your <br /> <span> Dream Job</span>
              </h2>
              <p>
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="btn btn-md">Get Started</button>
            </div>
            <div className="col-12 col-md-6">
              <img style={{ width: "100%" }} src={person} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Job category items */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Job Category List</h2>
              <p>
                Explore thousands of job opportunities with all the information
                you need. Its your future
              </p>
            </div>
            <div className="col-12">
              
              <JobCategory category={allData.categories}></JobCategory>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Featured Job List</h2>
              <p>
                Explore thousands of job opportunities with all the information
                you need. Its your future
              </p>
            </div>
            <div className="col-12 py-4">
              <div className="Featured-jobcontainer">
                <div className="container">
                  <div className="row">
                    {
                      featuredJob && featuredJob.map((data, index) => {
                        return  <FeaturedJob key={data.id} data={data}></FeaturedJob>
                      }) 
                    }
                   
                   
                  </div>
                  <div className="row">
                    <div className="col text-center py-2">
                    {
                      featuredJob.length < 6 && <button className="btn btn-lg mx-auto " onClick={handleViewAll}>View ALL</button>
                    }
                    </div>
                  </div>
                
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
