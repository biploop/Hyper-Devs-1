import React from "react";
import "./footer.css";

function Footer1() {
  return(
    <div className= 'footer-content'>
      <div className="footer-container">
        <div className="col1-container">
          <div className="col1">
          <div>A project presented to:</div>
          <div className="footer-cs-text">Department of Computer Science</div>
          <div className="footer-upc-text">University of the Philippines Cebu</div>
          </div>
          <div className="footer-logos">
          <div className="footer-cs-logo"></div><div className="footer-upc-logo"></div>
          </div>
        </div>
          
        <div>
          <div>In collaboration with:</div>
          <div className="footer-upchs-text">University of the Philippines Cebu High School</div>
        </div>
        
        <div>
            <div className="col3">
              <div className="col3-container">
              <div>Designed and implemented by:</div>
              <div className="footer-hd-text">Hyper Devs</div>
              </div>
              <div className="footer-hd-logo"></div>
            </div>
          <div className="footer-reach-us">Reach us:<a href="#">upc.hyperdevs@gmail.com</a></div>
        </div>
      </div>
      <hr />
      <div className='copyright-stmnt'>&copy; UPCHS 2023. All rights reserved.</div>
    </div>  
  )
}
export default Footer1;