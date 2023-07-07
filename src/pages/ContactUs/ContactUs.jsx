import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="contactus_flexleft">
        <h2>Get in Touch</h2>
        <p>
          Our customers’ satisfaction is our upmost <br /> priority! Our support
          service is available
          <br /> round the clock to assist with any question <br />
          you may have regarding our platform.
        </p>
      </div>
      <div className="contactus_flexright">
        <form>
          <label>Email</label>
          <input type="text" name="Enter your email address" />
          <label>Phone Number</label>
          <input type="text" name="Enter your Phone Number" />
          <label>Email</label>
          <textarea />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
