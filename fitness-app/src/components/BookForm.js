//import { useState } from "react";
import React, { useState } from 'react';
import axios from 'axios';
import "../styles/BookForm.css";
import PhoneInputGfg from "./PhoneNumberSelection";



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
      const response = await axios.post('https://gym-service-ejuu.onrender.com/api/BookForm', formData);

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
            <label htmlFor="classType">ClassType:</label>
            <select
             id="classType"
             name="classType"
             value={formData.classType}
             onChange={handleChange}
             required
           >
             <option value="">Select a class type</option>
             <option value="YOGA">YOGA</option>
             <option value="CARDIO_DANCE">CARDIO_DANCE</option>
             <option value="CHISEL_IT">CHISEL_IT</option>
             <option value="THE_RIDE">THE_RIDE</option>
             <option value="ADVANCED_HIIT">ADVANCED_HIIT</option>
             <option value="ACTION_SPORTS">ACTION_SPORTS</option>
           </select>
          </div>

          <div className="form-value">
            <label htmlFor="level">Level:</label>
            <input
              type="text"
              id="level"
              placeholder="Beginner/Intermediate/Advanced"
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-value">
            <label htmlFor="phone">Phone:</label>
            {/* Include the PhoneInputGfg component here */}
            <PhoneInputGfg
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
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