import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [action, setAction] = useState("signup");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
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
    </div>
  );
};

export default Login;
