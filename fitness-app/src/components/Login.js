import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios"

/*const Login = () => {
  const [action, setAction] = useState("signup");
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://fitness-centre.onrender.com/api', action)
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
*/


const Login = () => {
  const [action, setAction] = useState('signup');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === 'signup') {
      // Handle signup logic
      axios
        .post('https://fitness-centre.onrender.com/api/signup', formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else if (action === 'login') {
      // Handle login logic
      axios
        .post('https://fitness-centre.onrender.com/api/login', formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="all">
      <div className="container">
        <div className="heeader">
          <div className="text">{action}</div>
        </div>
        <form onSubmit={handleSubmit}>
          {action === 'signup' && (
            <div className="input">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
              />
            </div>
          )}
          <div className="input">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
            />
          </div>
          <div className="input">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
            />
          </div>
          <div className="submit container">
            <div
              className={action === 'login' ? 'submit gray' : 'submit'}
              onClick={() => {
                setAction('signup');
              }}
            >\
              Signup
            </div>
            <div
              className={action === 'signup' ? 'submit gray' : 'submit'}
              onClick={() => {
                setAction('login');
              }}
            >
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;