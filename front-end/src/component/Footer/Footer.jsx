import React from "react";
import "./Footer.css";
import Layout from "../Layout/Layout";

const Footer = () => {
  return (
    <>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For NewsLetters</h4>
          <p>
            Get E-mail updates about our Courses and <span>special offer.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <footer>
        <div
          className="container padding"
          style={{
            paddingTop: "40px",
            padding: "0px",
            justifyContent: "space-between",
          }}
        >
          <div className="box logo" style={{ marginLeft: "20px" }}>
            {" "}
            <h1>ACADEMEASE</h1>
            <span>ONLINE NOTES PROVIDER</span>
            <p>
              Our Vision We envision a world where every student, study
              materials to support their learning journey.
            </p>
            <div className="logo">
              <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=300"></img>
            </div>
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="responsive">
            <div
              className="box link"
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h3>Explore</h3>
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Courses</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div
              className="box link"
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h3>Quick Links</h3>
              <ul>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
                <li>Feedbacks</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2023 All rights reserved by Team Academease</p>
        <div className="social-icons">
          <a href="https://www.instagram.com">
            <img
              src="https://th.bing.com/th?id=OIP.-ZirgQE5pr8e7htQWowJIgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Instagram"
            />
          </a>
          <a href="https://www.facebook.com">
            <img
              src="https://th.bing.com/th?id=OIP.gFOR2OAsMMpS610KsqTkiQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Facebook"
            />
          </a>
          <a href="https://www.linkedin.com">
            <img
              src="https://th.bing.com/th/id/OIP.bhVPgAcuDxNBBew1WZ10pgHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Google"
            />
          </a>
          <a href="https://www.goggle.com">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4w2x17JFNa6MfO7sFDyqE0th8s3P0N48VrBesNvWIQ&s"
              alt="Google"
            />
          </a>
          <a href="https://www.goggle.com">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAaVBMVEX///9XZexAUuro6vxLW+tVY+z19f5PXuvw8f1SYez7+/5HWOuKkvHBxfd3gu+aofI1Sepuee5mcu2lq/TGyviQmPI9T+q0ufWepfPe4PvMz/hbae1fbO17he+qsPTW2fmCi/C7v/YdOOkA6aYwAAADV0lEQVRoge2abbOyIBCGFVEEsnzN1DQ7//9HPlbHEch6RHaGmTPc31KXK2Bll0XPc3JycnJycnJycnL6G2JRHAebFccRgyJHSXXMO8LRRnHS5ccqiQDQwWFqjYa+lkI6/ddDYMo+pVSPu4imJ7NuZ3gv+iGcGXQ+yIkJ2/dJvp+eGbIneraXfTIa85fwznkPUnO276f7Bv6w289F0cMedoQg2L6P9qw2CYeB82QHvDJ29ZdIpc9mR5Apnyb9qB9lolxzPf+kMNef9LiDYft+F+vDv055+PWnLKIPDz46O8H0mkm4MLtS/PHPcv1lJlh9zSlG9FQGXiShSOQF5YkivOqjCAaOUV//tjScOTo/hfh5+DWpe7QSDmDg3bD4bVy3TcwmxU1bL5MaDe9+CgJHzRa75t0OAE4u2wwvqucBwMNu40LFuhAczsutliWHhtPjdlMlKpjD+W276Y3DwmmvY9tTUDhqdWxbBAkPc62YzKRwbArHtZ5xjQHhZ81khJ3h4HTUtR4pGBxrJ6AJhoMruUhzU6aB3ZSgE4PBw1y6k2DE5a33KeVIGR3B383guBBv3J/rFx6XK+Ozm/wuPlVgKLi4wrDfVpdAMwcSLM5FCwX3RevZlZZIMy+m0sAHQHMeXsUuDXOu0M1X5sSJDMJj7BrCwKXqQvEZLrlGBgMn0g77fdiPa8PuHQgIXHb2jQ4nuLsZXI4qCX8MKB+XK+ODHir78BoGru7uEx9jXAndZNV0wVef4jBwNXVkbam0F5StGvdKILhWFjOr/QvwPRUdsDm////pd91h4PKr9mW3KN0CetWkGmLww4vVxoKC/4g3lvqlWVQjYtmcDTTtilbKbeK26FI6CG9bIBSsTRNIXAsNR8m0pnT5eKmTskzqy5h30wXxTIXVGC6BnJwuE963Z2wJKcF8En4dwIhRpc2kzRrALpX3sz/FV39F13kimp5D71In/Ll/9b5aPQPArxJr25/VkhRMQYhyUjRidibTW68pCH+vhu2BrxYBMcnVqsessMvJ6v/aUQT8VP78Uun8cGtH+dNq4ddqydtqsd/qMYfdAx6rR1tWD/XsHmdaPci1e4Rt9/De6mcLntUPNjy7n6p4Vj/Secre50lOTk5OTk5OTk5OTpb1D6YeMFy/za14AAAAAElFTkSuQmCC"
              alt="Google"
            />
          </a>
        </div>
      </div>
    </>
  );

  // ... rest of the component code
};
export default Footer;
/*
return (
  
        <>
         <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
           <div className="aca"> <span>Academease the  student supporting platform</span></div>
          </div>
          <div>
            <div className='filee'>
            <label>upload your document</label>
            <div className='in'><input className="inp" type="file" accept=".pdf" id="pdfInput" /></div>
              <div className='btn'><button type='submit'>SUBMIT</button></div>
              </div>
          
          
          
            
            
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
           <div className='head'><h1>ACADEMEASE</h1></div>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box-link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            
            
           
          </div>
          <div className='box-last'>
           <div className='head1'> <h3>Have a Questions?</h3></div>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved  <i className='fa fa-heart'></i> by Academease
        </p>
        
      </div>
        </>
      )*/

/*
       <div className="cont"> 
      <div className='content1'>
      <div className='text'>
      <div className='text1'><h2>Personalized Learning<br />
             Platform</h2></div>
     
     <div className='text2'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Lorem ipsum<br />
      dolor sit amet, consectetur adipiscing elit
     Lorem ipsum dolor sit<br /> amet, consectetur adipiscing elit
     Lorem ipsum dolor sit<br /> amet, consectetur adipiscing elit
     </p>
     <button className="uploadButton">Upload Document</button>
      </div>

      </div>
      </div>
      <div className="content">
        
       <div className='pho'> <img src="https://mail.google.com/mail/u/0?ui=2&ik=532d2f51c6&attid=0.3&permmsgid=msg-f:1782430883666013291&th=18bc7771e9992c6b&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9znXnk5-kJNfSsL1ulh4ZlF4vyVM8nex1e2rptQ-vzm4kTIXpfTp0EI9pQQejqVt0JfjZi_H_trvkzhk_8LtVp8Gocb7KI0V1v7XSAx8P8SKy93x-KC_daWD8&disp=emb" /></div>
      </div>
    </div>*/
