import React from "react";
import finance from "../../assets/Icons/accounts 1.png";
const JobCategory = ({ category }) => {
  const { id, categoryName, iconLink, totalAvailableJobs } = category;

  return (
    <>
      <div className="category-container py-5">
        <div className="container">
          <div className="row">
            {category &&
              category.map((data, index) => {
                return (
                  <div key={data.id} className="col-6 col-md-3">
                    <div className="iconbox-wrapper">
                      <img style={{width: '60px'}} src={data.iconLink} alt="" />
                      <h3>{data.categoryName}</h3>
                      <p>{data.totalAvailableJobs}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCategory;
