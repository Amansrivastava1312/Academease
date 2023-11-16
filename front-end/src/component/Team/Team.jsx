import React from 'react'
import { FaRocket } from "react-icons/fa";

import "./Team.css"

const Team = () => {
  return (
      <>
     <section id="team">
  <h1 className="heading">
    <FaRocket />
 <strong>Our Team</strong>
  </h1>
  <div className="container-t">
    <div className="box-t">
      <div className="top-bar-t" />
      <div className="nav-t">
        <i className="verify fas fa-check-circle" />
        <input type="checkbox" className="heart-btn" id="heart-btn" />
        <label className="heart" />
      </div>
      <div className="details">
        <img src="images/team1.jpg" alt />
        <strong>Emma Olivia</strong>
        <p>Emmaolivia@gmail.com</p>
      </div>
      <div className="btn">
        <a href="#"><i className="fab fa-facebook-f" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-youtube" /></a>
      </div>
    </div>
    <div className="box-t">
      <div className="top-bar-t" />
      <div className="nav-t">
        <i className="verify fas fa-check-circle" />
        <input type="checkbox" className="heart-btn" id="heart-btn" />
        <label className="heart" />
      </div>
      <div className="details">
        <img src="images/team2.jpg" alt />
        <strong>Sofia Adward</strong>
        <p>Sofiaadward@gmail.com</p>
      </div>
      <div className="btn">
        <a href="#"><i className="fab fa-facebook-f" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-youtube" /></a>
      </div>
    </div>
    <div className="box-t">
      <div className="top-bar-t" />
      <div className="nav-t">
        <i className="verify fas fa-check-circle" />
        <input type="checkbox" className="heart-btn" id="heart-btn" />
        <label className="heart" />
      </div>
      <div className="details">
        <img src="images/team3.jpg" alt />
        <strong>Touseeq Ijaz</strong>
        <p>Touseeqijaz@gmail.com</p>
      </div>
      <div className="btn">
        <a href="#"><i className="fab fa-facebook-f" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-youtube" /></a>
      </div>
    </div>
    <div className="box-t">
      <div className="top-bar-t" />
      <div className="nav-t">
        <i className="verify fas fa-check-circle" />
        <input type="checkbox" className="heart-btn" id="heart-btn" />
        <label className="heart" />
      </div>
      <div className="details">
        <img src="images/team4.jpg" alt />
        <strong>Amelia Alex</strong>
        <p>Ameliaalex@gmail.com</p>
      </div>
      <div className="btn">
        <a href="#"><i className="fab fa-facebook-f" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-youtube" /></a>
      </div>
    </div>
  </div>
</section>


      
      </>
  )
}

export default Team