//import React from "react";
import React, { useState } from 'react';
import axios from 'axios';
import Imagee from "../images/Imagee.png";
import "../styles/Contact.css";
// import Navbar from "../components/Navbar";
// import Login from "../components/Login";


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Node.js server with the form data
      const response = await axios.post('https://fitness-centre.onrender.com/api/contact', formData);

      console.log('Form submitted with data:', formData);
      console.log('Server response:', response.data);

      alert('Thank you for submitting the form!');
      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="contact">
      <div className="leftSide"></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;