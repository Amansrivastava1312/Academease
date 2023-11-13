import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className='about'>
      <div className='teacher'>
        <img src='https://www.oxfordlearning.com/wp-content/uploads/2020/04/GettyImages-1035393946-scaled.jpg'></img>
      </div>
      <div className="nine">
  <h1>Welcome to Academease</h1>
 <div className='para'>
 <p>Our Vision We envision a world where every student, irrespective of background or circumstance. Through Academease, we aim to empower students to achieve their academic goals with confidence and ease.</p>
 </div>
 <div className='know'>
 <button className="know-more-button">Know More</button>
 </div>
</div>
      </div>
    </>
  )
  // ... rest of the component code
};
export default AboutUs;