import React from 'react';
import './AboutUs.css';
import Header from '../Layout/Header';
import Footer from '../Footer/Footer';
import Team from '../Team/Team';
// import Background from '../'
import Layout from '../Layout/Layout';

const AboutUs = () => {
  return (
    <>
     <Layout>
        <Team />
        <div className="about-container">
      <div className="about-image">
        <img src="https://www.bing.com/th?id=OIP.jEeunVRW28s2uBZlXjKQHAHaEt&w=143&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Academmease Image" />
      </div>
      <div className="about-content">
        <h1>Welcome to Academmease</h1>
        
        <p>
          Academmease is your ultimate destination for accessing
          comprehensive online notes to support your learning jo 
          urney. With a diverse collection of study materials, 
          we aim to empower students in their pursuit of knowledge.
          urney. With a diverse collection of study materials, 
          we aim to empower students in their pursuit of knowledge.
          urney. With a diverse collection of study materials, 
          we aim to empower students in their pursuit of knowledge.
        </p>
        <button className="know-more-button">Know More</button>
      </div>
      
    </div>
    </Layout>
    
    </>
  )
  
};
export default AboutUs;
/*
 <div className="about-container">
      <div className="about-image">
        <img src="https://www.bing.com/th?id=OIP.jEeunVRW28s2uBZlXjKQHAHaEt&w=143&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Academmease Image" />
      </div>
      <div className="about-content">
        <h1>Welcome to Academmease</h1>
        
        <p>
          Academmease is your ultimate destination for accessing
          comprehensive online notes to support your learning jo 
          urney. With a diverse collection of study materials, 
          we aim to empower students in their pursuit of knowledge.
          urney. With a diverse collection of study materials, 
          we aim to empower students in their pursuit of knowledge.
          urney. With a diverse collection of study materials, 
          we aim to empower students in their pursuit of knowledge.
        </p>
        <button className="know-more-button">Know More</button>
      </div>
      
    </div>

*/
