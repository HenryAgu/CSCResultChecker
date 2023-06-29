import React, { useState } from 'react';
import "./Style/AdminLogin.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic or validation here
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
    } else {
      // Simulating server-side validation and error handling
      if (email === 'admin@example.com' && password === 'password') {
        // Successful login
        console.log('Login successful');
        // Reset form fields and error message
        setEmail('');
        setPassword('');
        setErrorMessage('');
      } else {
        // Login failed - incorrect email or password
        setErrorMessage('Invalid email or password.');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>Login Account</h1>
          <form className="card-form" onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <label className="input-label">Password</label>
            </div>


            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className='forgot'>
            <NavLink to="/admin/register/login/forgotpass"> Forgot Password?</NavLink>
            </div>
            <div className="action">
            <NavLink to="/admin">  <button type="submit" className="action-button">LOGIN</button></NavLink>
            </div>

          <div className="card-form-p">
            <p>Don't have an account? <NavLink to="/admin/register">Register</NavLink></p>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
