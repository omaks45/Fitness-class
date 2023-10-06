import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios"

const Login = () => {
  const [action, setAction] = useState("signup");
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://fitness-centre.onrender.com', action)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="all"> 
      <div className="container">
      <div className="heeader">
        <div className="text">{action}</div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="inputs">
        {action === "login" ? (
          <div></div>
        ) : (
          <div className="input">
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="input">
          <input type="password" name="password" placeholder="password" />
        </div>
        {action === "signup" ? (
          <div></div>
        ) : (
          <div className="forgot-password" name="forgot-password">
            lost password ? <span>click Here</span>
          </div>
        )}

        <div className="submit container">
          <div
            className={action === "login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("signup");
            }}
          >
            signup
          </div>
          <div
            className={action === "signup" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("login");
            }}
          >
            login
          </div>
        </div>
      </div>
      </form>
    </div>
    </div>
  );
};

export default Login;