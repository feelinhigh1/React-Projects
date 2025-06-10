import React from "react";
import contactImage from "../../assets/images/contact-us.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <div>
        <div className="contact-container">
          <div className="contact-top">
            <h1>CONTACT US</h1>
            <p>
              LETS CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
              WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU
              CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY
              PHONE, EMAIL OR SOCIAL MEDIA
            </p>
          </div>
          <div className="contact-bottom">
            <div className="contact-bottom-left">
              <div className="contact-bottom-left-section1">
                <button className="via-support-chat black-button">
                  VIA SUPPORT CHAT
                </button>
                <button className="via-call black-button">
                  <FontAwesomeIcon icon={faPhone} className="call-icon" />
                  VIA CALL
                </button>
              </div>

              <div className="contact-bottom-left-section2">
                <button className="via-email-form">VIA EMAIL FORM</button>
              </div>

              <div className="contact-bottom-left-section3">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">TEXT</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="7"
                      required
                    ></textarea>
                  </div>
                  <div className="button-wraper">
                    <button className="submit-button">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="contact-bottom-right">
              <div className="contact-image-container">
                <img
                  src={contactImage}
                  alt="contact Image"
                  className="contact-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
