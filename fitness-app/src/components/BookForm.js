//import { useState } from "react";
import React, { useState } from 'react';
import axios from 'axios';
import "../styles/BookForm.css";
import PhoneInputGfg from "./PhoneNumberSelection";

/*
function BookForm() {
  const [formData, setFormData] = useState({
    classType: "",
    status: "",
    level: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    sessionStorage.setItem("formData", JSON.stringify(formData));
    alert("Thank you for submitting the form!");
    // window.location.reload();
  };

  return (
    <div>
      <div className="form-container">
        <h2>Registration Form</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-value">
            <label htmlFor="classtype">Class type:</label>
            <select
              id="classtype"
              name="classtype"
              value={formData.classtype}
              onChange={handleChange}
              required
            >
              <option>YOGA</option>
              <option>CARDIO_DANCE</option>
              <option>CHISEL_IT</option>
              <option>THE_RIDE</option>
              <option>ADVANCED_HIIT</option>
              <option>ACTION_SPORTS</option>
            </select>
          </div>
          <div className="form-value">
            <label htmlFor="lastName">Level:</label>
            <input
              type="text"
              id="level"
              placeholder="begginer/ intermediate/ advanced"
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-value">
            <PhoneInputGfg style={{marginLeft: '10%'}} />
           </div>

          <div className="form-value">
            <label htmlFor="phone">Status:</label>
            <input
              type="text"
              id="status"
              placeholder="schedule/ completed/ canceled"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </div>
           
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
*/

function BookForm() {
  const [formData, setFormData] = useState({
    classType: '',
    status: '',
    level: '',
    phone: '',
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
      const response = await axios.post('https://fitness-centre.onrender.com/api/BookForm', formData);

      console.log('Form submitted with data:', formData);
      console.log('Server response:', response.data);

      sessionStorage.setItem('formData', JSON.stringify(formData));
      alert('Thank you for submitting the form!');
      // window.location.reload();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div>
      <div className="form-container">
        <h2>Registration Form</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-value">
            <label htmlFor="classType">Class type:</label>
            <select
              id="classType" // Fix the typo in the HTML id
              name="classType"
              value={formData.classType}
              onChange={handleChange}
              required
            >
              <option>YOGA</option>
              <option>CARDIO_DANCE</option>
              <option>CHISEL_IT</option>
              <option>THE_RIDE</option>
              <option>ADVANCED_HIIT</option>
              <option>ACTION_SPORTS</option>
            </select>
          </div>
          <div className="form-value">
            <label htmlFor="level">Level:</label>
            <input
              type="text"
              id="level"
              placeholder="beginner/intermediate/advanced"
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-value">
            {/* Phone input component */}
          </div>

          <div className="form-value">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              placeholder="scheduled/completed/canceled"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;