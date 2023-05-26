import React from 'react'
import logofooter from '../../assets/Logo/tesla-91.png'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 text-sm-center">
                <img src={logofooter} alt="" />
                <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <ul>
                  <li><a href=""><i className='bx bxl-facebook-circle'></i></a></li>
                  <li><a href=""><i className='bx bxl-facebook-circle'></i></a></li>
                  <li><a href=""><i className='bx bxl-facebook-circle'></i></a></li>
                </ul>
              </div>
              <div className="col-12 col-md-2 text-sm-center">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">About Us</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-2 text-sm-center">
                <h4>Product</h4>
                <ul>
                  <li><a href="#">Prototype</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">About Us</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-2 text-sm-center">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Help Desk</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">About Us</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-2 text-sm-center">
                <h4>Contact</h4>
                <ul>
                  <li><a href="#">Help Desk</a></li>
                  <li><a href="#">About Us</a></li>
                  
                </ul>
              </div>
            
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer