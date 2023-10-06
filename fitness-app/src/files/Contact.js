import React from "react";
import Imagee from "../images/Imagee.png";
import "../styles/Contact.css";
// import Navbar from "../components/Navbar";
// import Login from "../components/Login";


function Contact() {
  return (
    
    <div className="contact">
      {/* <Navbar /> */}
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Imagee})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" name="contact" method="">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;