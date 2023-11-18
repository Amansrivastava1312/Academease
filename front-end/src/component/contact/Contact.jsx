import React from "react";
import "./contact.css";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact_us_6">
        <div className="responsive-container-block container">
          <form className="form-box">
            <div className="container-block form-wrapper">
              <div className="mob-text">
                <p className="text-blk contactus-head">Contact us</p>
                <p className="text-blk contactus-subhead">
                  Academmease is your ultimate destination for accessing
                  comprehensive online notes to support your learning
                </p>
              </div>
              <div className="responsive-container-block" id="i2cbk">
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i10mt-3"
                >
                  <p className="text-blk input-title">FIRST NAME</p>
                  <input
                    className="input"
                    id="ijowk-3"
                    name="FirstName"
                    placeholder="Please enter first name..."
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="ip1yp"
                >
                  <p className="text-blk input-title">EMAIL</p>
                  <input
                    className="input"
                    id="ipmgh-3"
                    name="Email"
                    placeholder="Please enter email..."
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="ih9wi"
                >
                  <p className="text-blk input-title">PHONE NUMBER</p>
                  <input
                    className="input"
                    id="imgis-3"
                    name="PhoneNumber"
                    placeholder="Please enter phone number..."
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i634i-3"
                >
                  <p className="text-blk input-title">
                    WHAT DO YOU HAVE IN MIND ?
                  </p>
                  <textarea
                    className="textinput"
                    id="i5vyy-3"
                    placeholder="Please enter query..."
                  ></textarea>
                </div>
              </div>
              <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
                Submit
              </button>
            </div>
          </form>
          <div
            className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12"
            id="i772w"
          >
            <div className="map-part">
              <p
                className="text-blk map-contactus-head"
                id="w-c-s-fc_p-1-dm-id"
              >
                Reach us at
              </p>
              <p className="text-blk map-contactus-subhead">
                Academmease is your ultimate destination for accessing
                comprehensive online notes to support your learning
              </p>
              <div className="social-media-links mob">
                <a className="social-icon-link" href="#" id="ix94i-2-2">
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                  />
                </a>
                <a className="social-icon-link" href="#" id="itixd">
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                  />
                </a>
                <a className="social-icon-link" href="#" id="izxvt">
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                  />
                </a>
                <a className="social-icon-link" href="#" id="izldf-2-2">
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                  />
                </a>
              </div>
              <div className="map-box container-block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.607731406603!2d77.5907495751151!3d27.605688676241073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sGLA%20University!5e0!3m2!1sen!2sin!4v1700207853389!5m2!1sen!2sin"
                  width="610"
                  height="510"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GLA University Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="workik-contact-box">
        <div className="phone text-box">
          <img
            className="contact-svg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
            alt="phone icon"
          />
          <p className="contact-text">+1258 3258 5679</p>
        </div>
        <div className="address text-box">
          <img
            className="contact-svg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
            alt="address icon"
          />
          <p className="contact-text">hello@workik.com</p>
        </div>
        <div className="mail text-box">
          <img
            className="contact-svg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"
            alt="mail icon"
          />
          <p className="contact-text">102 street, y cross 485656</p>
        </div>
      </div>

      <h1></h1>
      <Footer />
    </>
  );
};
export default Contact;
