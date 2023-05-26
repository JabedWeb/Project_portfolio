import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/netflix-4-1.png";
import "bootstrap/dist/js/bootstrap.bundle";
const Header = () => {
  return (
    <>
      <div className="header-wrapper  py-3 fixed-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="img-wrapper">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
              <div className="menu-wrapper d-flex justify-content-center align-items-center">
                <ul className="d-flex justify-content-center align-items-center gap-3">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"statistics"}>Statistics</Link>
                  </li>
                  <li>
                    <Link to={"applied"}>Applied Jobs</Link>
                  </li>
                  <li>
                    <Link to={"blog"}>Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-12 col-md-4">
              <div className="btn-wrapper text-end ">
                <button className="btn btn-primary btn-md">
                  Start Applying
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}

      <div className="mobile-header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              NETFLIX
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"statistics"}>Statistics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"applied"}>Applied Jobs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"blog"}>Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
